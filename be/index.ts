
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

let { PASSWORD } = process.env

const MONGO_CONNECTION_STRING = `mongodb+srv://team-syntax:${PASSWORD}@cluster0.kouvryn.mongodb.net/`;


mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });
const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('ajillaa');
});

app.listen(port, () => {
  console.log(`aslaa http://localhost:${port}`);
});
