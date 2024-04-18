import connectToDb from '@/utils/mongo/connectToMongoDb';
import { SimpleMessage } from '@/utils/mongo/models/simpleMessageModel';

export async function GET() {
  try {
    await connectToDb(); // Ensure the connection to the database is awaited

    const simpleMessage = await SimpleMessage.findOne();

    if (!simpleMessage) {
      // todo - should send 404 as well! Find out how..
      return new Response(JSON.stringify({ message: 'Nothing' }));
    }

    return new Response(JSON.stringify(simpleMessage));
  } catch (err) {
    // todo look into https://www.youtube.com/watch?v=vrR4MlB7nBI for new way to handle responses..
    // Send a 500 status code indicating a server error
    return new Response(JSON.stringify({ message: 'Error' }));
  }
}

export async function POST(request: any) {
  try {
    // First, connect to the database
    await connectToDb();

    // Parse the request body to get the message data
    const data = await request.json();

    // Find the latest document by sorting by the '_id' field in descending order
    const latestDocument = await SimpleMessage.findOne().sort({ _id: -1 });

    // Define the criteria for updating, which will be the ID of the latest document if it exists
    const criteria = latestDocument ? { _id: latestDocument._id } : {};

    // Define the update object. This could include the new message content from the request.
    const update = { message: data.message };

    // Set options to upsert - create a new document if no latest document is found.
    const options = { upsert: true, new: true, runValidators: true };

    // Perform the upsert operation
    const result = await SimpleMessage.findOneAndUpdate(criteria, update, options);

    // Return the result as a response
    return new Response(JSON.stringify(result), {
      status: result.__v > 0 ? 200 : 201, // Return 200 if updated, 201 if created (assumes versioning is used)
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    // Handle errors and send a response with a 500 status code
    return new Response(
      JSON.stringify({ message: 'Internal Server Error', error: err.toString() }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
// ref: https://www.youtube.com/watch?v=vrR4MlB7nBI
// ref: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

// note: endpoint for app router is... http://localhost:3000/api-stage/api
