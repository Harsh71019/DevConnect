const express = require("express");
const app = express();
const connectDB = require("./config/db");
const { connect } = require("mongoose");
//Connecting MongoDB

connectDB();

//init middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

//Defining the Routes

app.use("/api/users", require("./routes/apis/users"));
app.use("/api/auth", require("./routes/apis/auth"));
app.use("/api/profile", require("./routes/apis/profile"));
app.use("/api/posts", require("./routes/apis/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
