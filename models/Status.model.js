const mongoose = require('mongoose');

const statusSchema = mongoose.Schema(
  {
    text: { type: String, required: true, default: 'Активен' },
    color: { type: String },
  },
  { timestamps: true }
);

const Status = mongoose.model('Status', statusSchema);

module.exports = Status;
