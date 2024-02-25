const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//calling Database function for connection
const dbConnection = require("./config/database");
dbConnection();

app.use("/", userRoutes);

// start the server
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
