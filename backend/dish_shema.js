require("dotenv").config(); const mongoose = require("mongoose"); const express = require("express"); const Books = require("./bookSchema"); const Users = require("./userSchema"); const app = express(); app.use(express.json()); // Connect to MongoDB mongoose.connect(process.env.MONGO_URI)