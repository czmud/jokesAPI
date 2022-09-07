import express from "express";
const app = express();
const port: number = 8000;
import "./server/src/config/mongoose.config"

app.use(express.json(), express.urlencoded({ extended: true }));

import { AllJokeRoutes } from './server/src/routes/jokes.routes'

AllJokeRoutes(app);

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${port}!`)
);