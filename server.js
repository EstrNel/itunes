//if (process.env.NODE_ENV != "production") {
//  require("dotenv").load();
//}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

const mongoose = require("mongoose");
const uri =
  "mongodb+srv://estrlouw:AamdNnTvD9wXGtL3@cluster0.xkpdfer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Connect to the database
mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://estrlouw:AamdNnTvD9wXGtL3@cluster0.xkpdfer.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(
    () => {
      console.log("Successfully connected to the database!");
    },
    (err) => {
      console.log("Could not connect to the database..." + err);
    }
  );

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
