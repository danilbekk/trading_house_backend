const httpStatus = require('http-status');
const Note = require('../models/Note.model');

module.exports.notesController = {
  getAll: async (req, res) => {
    try {
      const note = await Note.find();

      return res.json(note);
    } catch (e) {
      return res.status(httpStatus.SERVICE_UNAVAILABLE).json({
        error: e.message,
      });
    }
  },

  createNote: async (req, res) => {
    const { client } = req.params;
    const { text, status } = req.body;
    if (!status) {
      return res.status(httpStatus.BAD_REQUEST).json({
        error: 'Необходимо выбрать статус клиента',
      });
    }
    try {
      const note = await new Note({ text, client, status });

      await note.save();

      return res.json(note);
    } catch (e) {
      return res.status(httpStatus.SERVICE_UNAVAILABLE).json({
        error: e.message,
      });
    }
  },

  removeNote: async (req, res) => {
    const { id } = req.params;
    try {
      const note = await Note.findByIdAndRemove(id);

      if (!note) {
        return res.json({
          message: 'Не удалось удалить запись. Укажите верный ID',
        });
      }
      return res.json({
        message: 'Запись успешно удалена',
      });
    } catch (e) {
      return res
        .status(httpStatus.SERVICE_UNAVAILABLE)
        .json({ error: e.message });
    }
  },

  editNote: async (req, res) => {
    const { id } = req.params;
    const { text, status } = req.body;
    try {
      const note = await Note.findByIdAndUpdate(
        id,
        { text, status },
        { new: true }
      );
      return res.json(note);
    } catch (e) {
      return res.status(httpStatus.SERVICE_UNAVAILABLE).json({
        error: e.message,
      });
    }
  },
};
