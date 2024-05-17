const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "please enter the first"],
  },
  lastName: {
    type: String,
    required: [true, "please enter the family"],
  },
  email: {
    type: String,
    required: [true, "please enter the email"],
  },
  mobile: {
    type: String,
    required: [true, "please enter the mobile"],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
