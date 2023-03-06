const httpStatus = require('http-status');
const Status = require('../models/Status.model');

module.exports.statusesController = {
  getAll: async (req, res) => {
    try {
      const status = await Status.find();
      return res.json(status);
    } catch (e) {
      return res.status(httpStatus.SERVICE_UNAVAILABLE).json({
        error: e.message,
      });
    }
  },
  createStatus: async (req, res) => {
    const { text, color } = req.body;
    if (!text) {
      return res.status(httpStatus.BAD_REQUEST).json({
        error: 'Необходимо указать статус',
      });
    }
    try {
      const status = await new Status({
        text,
        color,
      });
      await status.save();
      return res.json(status);
    } catch (e) {
      return res.status(httpStatus.SERVICE_UNAVAILABLE).json({
        error: e.message,
      });
    }
  },
  editStatus: async (req, res) => {
    const { id } = req.params;
    const { text, color } = req.body;
    try {
      const status = await Status.findByIdAndUpdate(
        id,
        { text, color },
        { new: true }
      );
      await status.save();
      return res.json(status);
    } catch (e) {
      return res.status(httpStatus.SERVICE_UNAVAILABLE).json({
        error: e.message,
      });
    }
  },
};
