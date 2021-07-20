const mongoose = require("mongoose");

const superAdminAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("authModelForSuperAdmin", superAdminAuthSchema);
