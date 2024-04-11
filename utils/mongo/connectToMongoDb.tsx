import mongoose from 'mongoose';
import { PROJECT_ENVS } from '../projectSettings';

const connection: { isConnected?: number } = {};

async function connectToDb() {
  if (connection.isConnected) {
    console.log('connected');

    return;
  }
  const db = await mongoose.connect(PROJECT_ENVS.MONGO_ENV);
  connection.isConnected = db.connections[0].readyState;
  console.log('not connected');
}
export default connectToDb;
