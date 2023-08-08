import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";

dotenv.config({ path: ".env.production" });

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

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);

connectToDatabase();
