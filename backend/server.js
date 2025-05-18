import express from "express"
import dotenv from "dotenv"

import authRoute from "./routes/auth.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use("/api/auth", authRoute);

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
})