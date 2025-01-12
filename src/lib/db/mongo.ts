import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private cached: MongooseCache = {
    conn: null,
    promise: null
  };

  private constructor() {}

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  async connect(): Promise<typeof mongoose> {
    if (this.cached.conn) {
      return this.cached.conn;
    }

    if (!this.cached.promise) {
      this.cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
    }

    this.cached.conn = await this.cached.promise;
    return this.cached.conn;
  }
}

export default DatabaseConnection.getInstance().connect.bind(DatabaseConnection.getInstance());
