const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
  {
    text: { type: String, required: true },
    client: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: 'Client',
    },
    status: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: 'Status',
    },
  },
  { timestamps: true }
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
