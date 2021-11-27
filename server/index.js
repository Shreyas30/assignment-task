import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";
dotenv.config(); //* For Accessing Environmental Varibles

const App = express();


App.use(bodyParser.json({extended:true}));
App.use(bodyParser.urlencoded({extended:true}));
App.use(cors());

App.use("/", router);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => App.listen(PORT,() => console.log(`Server Running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
