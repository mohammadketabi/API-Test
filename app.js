const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");

const app = express();

app.use(express.json());
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello API!");
});

mongoose
  .connect("mongodb://localhost:27017/shop_DB")
  .then(() => {
    console.log("connected to mongodb");
    app.listen(3000, () => {
      console.log("App running on port 3000");
    });
  })
  .catch(() => {
    console.log("can't connected to mongodb");
  });
