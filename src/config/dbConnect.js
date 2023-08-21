// import { mongoose } from "mongoose";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:delis123@cluster0.d3aohdm.mongodb.net/lista"
);

let db = mongoose.connection;

export default db;

// adicionar no postiman esse Diciotech
