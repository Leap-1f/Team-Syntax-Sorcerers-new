import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AWS from "aws-sdk";
import fs from "fs";
dotenv.config();
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION } = process.env;

AWS.config.update({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION,
});
const s3 = new AWS.S3();

const uploadParams = {
  Bucket: "team-syntax",
  Key: "image.png",
  Body: fs.createReadStream("public/image.png"),
};

s3.upload(uploadParams, (err: any, data: any) => {
  if (err) {
    console.error("Error uploading file:", err);
  } else {
    console.log("File uploaded successfully. Location:", data.Location);
  }
});
let { PASSWORD } = process.env;

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

app.get("/", (req: Request, res: Response) => {
  res.send("ajillaa");
});

app.listen(port, () => {
  console.log(`aslaa http://localhost:${port}`);
});
