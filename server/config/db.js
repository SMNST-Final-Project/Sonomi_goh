import mongoose from "mongoose";

export default async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)

        console.log(`MongoDB is connected`); //
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}