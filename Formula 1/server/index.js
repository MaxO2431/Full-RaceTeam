require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const models = require("./Models/models");
const cors = require("cors");
const fileupload = require("express-fileupload");
const router = require("./routes/index");
const errorHeadler = require("./middleware/ErrorHeadlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileupload({}));

app.use("/api", router);

//Обработчик ощибок
app.use(errorHeadler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("Server is working"));
  } catch (e) {
    console.log(e);
  }
};

start();
