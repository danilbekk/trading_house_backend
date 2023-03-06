require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path')
const routes = require('./routes/index');


const { PORT, DB_URL } = process.env;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));
app.use(routes);

app.use(express.static(path.resolve(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build"))
})
async function start() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
  } catch (e) {
    console.log(e.message);
  }
}

start();
