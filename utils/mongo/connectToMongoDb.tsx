import mongoose from 'mongoose';
import { PROJECT_ENVS } from '../projectSettings';

// Define a type for the connection object
type Connection = {
  isConnected?: number; // Using "?" to denote that isConnected might not exist initially
};

const connection: Connection = {};

export const connectToDb = async (): Promise<void> => {
  try {
    // Already a connection, dismiss and return.
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    }

    // Connect to the database
    console.log(PROJECT_ENVS.MONGO_ENV);

    const db = await mongoose.connect(PROJECT_ENVS.MONGO_ENV as string);
    connection.isConnected = db.connection.readyState; // adjusted to use the singular form 'connection'

    console.log('Mongoose is connected!');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('An unexpected error occurred');
    }
    console.log('An unexpected error occurred');
    throw new Error('Failed to connect to MongoDB');
  }
};
