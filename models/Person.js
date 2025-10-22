import mongoose from "mongoose";

// Schema
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
}, { timestamps: true });

// Model - modelName + schema
export const Person = mongoose.model("Person", personSchema);

