const User = require("../models/user.model");

const getUsers = async (req, res) => {
  const users = await User.find({});

  if (!users) {
    res.json({
      message: "unsuccessful",
      data: null,
    });
  }

  res.json({
    message: "successful",
    data: users,
  });
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      res.json({
        message: "unsuccessful",
        data: null,
      });
    }
    res.json({
      message: "successful",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(500).json({
      message: "successful",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
