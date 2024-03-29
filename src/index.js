// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.error("ERRRR", error);
      throw error;
    });
  })
  .catch((err) => console.log(err, " MongoDb connection failed !!!"));

// import express from "express";

// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("error", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening at port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error, "Error");
//     throw error;
//   }
// })();
