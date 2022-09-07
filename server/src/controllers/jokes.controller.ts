import { Joke } from "../models/jokes.model";
import { Request, Response } from "express"

export const findAllJokes = (req: Request, res: Response) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({message: "Something went wrong", error: err }));
}

export const findOneJoke = (req: Request, res: Response) => {
    Joke.findOne({ _id: req.params.id})
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({message: "Something went wrong", error: err }));
}

export const createNewJoke = (req: Request, res: Response) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

export const updateJoke = (req: Request, res: Response) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then( updatedJoke => res.json({ joke: updatedJoke }))
        .catch( err => res.json({ message: "Something went wrong", error: err }));

};

export const deleteJoke = (req: Request, res: Response) => {
    Joke.deleteOne({_id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "something went wrong", error: err}));

};
