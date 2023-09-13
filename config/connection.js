import mongoose from "mongoose";
import { mongoDbUrl } from "../config.js";

mongoose.connect(mongoDbUrl)
.then(() => {
  console.log("Database was connected successfully");
}).catch(err => console.log(err.message))