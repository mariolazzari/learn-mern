const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// express setup
const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());

// server API routes
app.use("/api/items", require("./routes/api/items"));

// database connection
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB succesfully connected"))
  .catch(err => console.log("Error while connecting to MongoDB", err));

// start server
app.listen(PORT, () => console.log("Server started on port", PORT));
