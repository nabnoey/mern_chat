const express = require("express");
require("dotenv").config();
// dotenv.config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRouter = require("./routers/user.router");

const app = express();

app.use(express.json());
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const BASE_URL = process.env.BASE_URL;
app.use(
  cors({
    credentials: true,
    origin: BASE_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token"],
  }),
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello Mern Chat!");
});

if (!DB_URL) {
  console.log("DB_URL");
} else {
  mongoose
    .connect(DB_URL)
    //ถ้าเชื่อมสำเร็จใช้ then  (() =>{}) เรียกว่า call back function
    .then(() => {
      console.log("Database Connect to MongoDB Successfully");
    })
    .catch((error) => {
      console.log("Database Connect Error", error.message);
    });
}

app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log("Server running on http:localhost:" + PORT);
});
