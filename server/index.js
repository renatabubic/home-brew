const express = require("express");
const axios = require("axios");
const path = require("path");
const morgan = require("morgan");

const db = require("./db");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Shakin', not stirred, it up on port ${PORT}
  
      http://localhost:${PORT}
  
      `)
  );
};
startListening();
db.sync();

module.exports = app;
