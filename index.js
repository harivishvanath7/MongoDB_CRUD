import express from "express";
import dotenv from 'dotenv';

import { connectDB } from "./config/db.js";
import { Person } from "./models/Person.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

await connectDB();


app.get("/", (req, res) => {
    res.send("Home Route!!");
})

// Add user
app.post("/person", async (req, res) => {
    try {
        const {name, email, age} = req.body;
        const newPerson = new Person({
            name, 
            email, 
            age
        });

        await newPerson.save();
    
        console.log(newPerson);
        res.send("Person Added");
    } 
    catch (error) {
        res.status(400).send(error.message);
    }
});

// Update user
app.put("/person", async (req, res) => {
    // Finding the user with the given data
    const { id } = req.body;

    const personData = await Person.findByIdAndUpdate(id, {age:585}, {new:true});

    console.log(personData);
    res.send("Person Updated!!");
})

// Delete User
app.delete("/person/:id", async (req, res) => {
    const {id} = req.params;

    await Person.findByIdAndDelete(id);
    
    res.send("User Deleted!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 









