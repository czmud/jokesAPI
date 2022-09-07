import * as JokesController from "../controllers/jokes.controller";
import express from "express";

export const AllJokeRoutes = (app: express.Application ) => {
    app.get("/api/jokes/", JokesController.findAllJokes);
    app.get("/api/jokes/:id", JokesController.findOneJoke);
    app.post("/api/jokes/new", JokesController.createNewJoke);
    app.put("/api/jokes/update/:id", JokesController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
};