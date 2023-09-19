import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongooseConnection = {
 isConnected: 0,
};

export const connect = async () => {
 if (mongooseConnection.isConnected) {
  console.log('We are already connected to MongoDB');
  return;
 }

 if (mongoose.connections.length > 0) {
  mongooseConnection.isConnected = mongoose.connections[0].readyState;

  if (mongooseConnection.isConnected === 1) {
   console.log('Use previous MongoDb connection');
   return;
  }

  await mongoose.disconnect();
 }

 await mongoose.connect(process.env.MONGO_URL || '');
 mongooseConnection.isConnected = 1;
 console.log('Connecting to MongoDB:', process.env.MONGO_URL);
};

export const disconnect = async () => {
 if (process.env.NODE_ENV === 'development') return;

 if (mongooseConnection.isConnected === 0) return;

 await mongoose.disconnect();
 console.log('Connecting to MongoDB:');
};
