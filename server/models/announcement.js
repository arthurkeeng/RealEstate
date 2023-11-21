const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const AnnouncementSchema = new mongoose.Schema({
  id: { type: String },

  image: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Announcement", AnnouncementSchema);
