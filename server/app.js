const express = require("express");
const dbConnection = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = 3000;
dbConnection();
app.use(express.json());

// start the server
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
