import mongoose from "mongoose";

interface Connection {
    isConnected?: number;
}

const connection: Connection = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already Connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI as string);

        connection.isConnected = db.connections[0].readyState;
        console.log("Database Connected");
    } catch (error) {
        console.error("Database Connection Error: ", error);
        process.exit(1);
    }
}

export default dbConnect;
