const mongoose = require('mongoose');

const clientShema = mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    patronymic: { type: String, required: true },
    avatar: { type: String },
    room: { type: String, required: true },
  },
  { timestamps: true }
);

const Client = mongoose.model('Client', clientShema);

module.exports = Client;
