import mongoose from 'mongoose';

const connection: { isConnected?: number } = {};

async function connectToDb() {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/realtimewebcomms';

  if (connection.isConnected) {
    console.log('is connected');
    return;
  }

  const db = await mongoose.connect(mongoUri);
  connection.isConnected = db.connections[0].readyState;
  console.log('is not connected');
}
export default connectToDb;
