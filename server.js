//* require block
require("dotenv").config();
// connect to mongoDB here
require("./config/database");

const express = require("express");
const path = require("path");
const logger = require("morgan");
var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");
const usersRouter = require("./routes/usersRouter");
const entriesRouter = require("./routes/entriesRouter");
const favouritesRouter = require("./routes/favouritesRouter");
const plansRouter = require("./routes/plansRouter");
const jwt = require("jsonwebtoken");

//express app
const app = express();

//* middleware block
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.use("/", indexRouter);
app.use("/", userRouter);

const checkToken = (req, res, next) => {
  const token = req.get("Authorization")?.split(" ")?.[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const userId = decoded.user._id;
    res.locals.userId = userId;
    // storeId(req, res);
    next();
  } catch (error) {
    res.status(403).json({ msg: "wrong token" });
  }
};
app.use("/api/users", usersRouter);
// app.use("/api/users", checkToken, usersRouter);
app.use("/api/entries", entriesRouter);
app.use("/api/favourites", favouritesRouter);
app.use("/api/plan", plansRouter);

//* routes block

//this acts as a catch all function and must be at the very end after all other functions
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//* listen block
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
