import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

// Caching the Mongoose connection to reuse across requests
interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// doing caching our connection
let cached: MongooseConnection = (global as any).mongoose;

// If no cached connection exists, initialize it
if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

// Function to connect to the MongoDB database
export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  if (!MONGODB_URL) throw new Error("MONGO_URL is not defined");

  // If connection promise doesn't exist, create and cache it
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "ImageCraft",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
