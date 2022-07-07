import express from "express";
const app = express();
import { authRoute, restaurantRoute } from "./src/routes/index.js";
import {createDB} from './db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

const db = createDB();

// setup database
db.init();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// register routes
app.use("/auth", authRoute);
app.use("/restaurants", restaurantRoute);


const server = app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
})