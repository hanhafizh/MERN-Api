const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();
// import routes
const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");

// import gallery
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(bodyParser.json());
// use multer image
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

// check error
app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message: message, data: data });
});

// use mongo db
mongoose
  .connect(
    "mongodb+srv://farhan:hzdYWadNKnZk0497@cluster0.5j9jx7d.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => console.log("Connection Succes"));
  })
  .catch((err) => console.log(err));
