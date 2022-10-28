const { Task1 } = require("../models/Task1");

// get all users
exports.getTask = async (req, res) => {
  try {
    const task1 = Task1;
    res.status(200).json({
      task1,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
