import mongoose from "mongoose";

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
})

export const Joke = mongoose.model("Joke", JokeSchema);