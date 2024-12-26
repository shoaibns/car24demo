import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Mongo db connected");
        });

        connection.on("error", (err) => {
            console.log("MongoDB connection error");
        });
    } catch (error) {
        console.log(error);
    }
};

export default dbConnect;
