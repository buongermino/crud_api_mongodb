import "dotenv/config";
import express from "express"
import mongoose from "mongoose";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);

mongoose
.connect(process.env.MONGODB_URI as string) 
.then((data) => {
    console.log("Connection has been succeeded")})
.catch((err) => {
    console.log("Failed to connect database", err.message)
})

export { app };