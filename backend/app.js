const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();

app.use(express.json(), cors());
app.use("/api", router);

const serverBootUp = () => {
  try {
    app.listen(process.env.PORT || 3000, () => console.log("Server Up!"));
  } catch (err) {
    console.error("There was an error starting the server: " + err.message);
  }
};

serverBootUp();
