
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/config/db");
const bookRoutes = require("./src/routes/bookRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/books", bookRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Book Management API");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
