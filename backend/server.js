import express from "express"
import dotenv from "dotenv"

import authRoute from "./routes/auth.route.js"
import connectDB from "./db/connectDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoute);


app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
    connectDB();
})