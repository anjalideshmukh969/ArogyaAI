import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})