const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/TodoRoutes.js");
const {
  getToDo,
  saveToDo,
  deleteToDo,
} = require("./controllers/TodoController.js");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

//  conncet mongodb
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connect to mongo"))
  .catch((err) => {
    console.log(err);
  });


app.use(router)

const PORT = process.env.port || 8000;

app.listen(PORT, (req, res) => {
  console.log(`server running on port:${PORT} `);
});
