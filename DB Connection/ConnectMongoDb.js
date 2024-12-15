import mongoose from 'mongoose';

export async function connectMongoDb(url, retries = 5) {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        if (retries === 0) {
            console.error("Error connecting to MongoDB:", error.message);
            process.exit(1);
        }
        console.log(`Retrying connection to MongoDB (${retries} retries left)...`);
        setTimeout(() => connectMongoDb(url, retries - 1), 5000);
    }

    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB connection disconnected");
    });
}