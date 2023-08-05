import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
import authRoute from "./routes/auth-route.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => console.log("Listening"));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

app.use("/auth", authRoute);

connectToDatabase();
