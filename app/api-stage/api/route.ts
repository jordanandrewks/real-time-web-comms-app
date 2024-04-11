// export async function GET() {
//   return new Response(JSON.stringify({ message: 'Test' }));
// }

// import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDb from '@/utils/mongo/connectToMongoDb';
import { SimpleMessage } from '@/utils/mongo/models/simpleMessageModel';

export async function GET() {
  try {
    console.log('inside');

    await connectToDb(); // Ensure the connection to the database is awaited

    const simpleMessage = await SimpleMessage.findOne();

    console.log(simpleMessage);

    if (!simpleMessage) {
      // If no banner announcement is found, send a 404 response
      return new Response(JSON.stringify({ message: 'Nothing' }));
    }

    return new Response(JSON.stringify(simpleMessage));
  } catch (err) {
    console.error(err); // It's good to log the error for debugging

    // Send a 500 status code indicating a server error
    return new Response(JSON.stringify({ message: 'Test' }));
  }
}

// ref: https://www.youtube.com/watch?v=vrR4MlB7nBI
// ref: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

// note: endpoint for app router is... http://localhost:3000/api-stage/api
