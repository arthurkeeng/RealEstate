const Announcement = require("../models/announcement");

const getAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.find({});
    res.status(200).json({ announcement });
  } catch (err) {
    res.json({ msg: "something went wrong" });
  }
};

const postAnnouncement = async (req, res) => {
  try {
    const newAnnouncement = await Announcement.create(req.body);
    res
      .status(201)
      .json({ announcement: newAnnouncement, msg: "added successfully" });
  } catch (err) {
    res.json({ msg: "something just happened" });
  }
};
const updateAnnouncement = async (req, res) => {
  const name = req.params.name;
  try {
    const updatedAnnouncement = await Announcement.findOneAndUpdate(
      { name },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    // if (!updatedProduct) {
    //   res.status(201).json({ msg: "no such product exists" });
    // }
    res
      .status(201)
      .json({ announcement: updatedAnnouncement, msg: "updated successfully" });
  } catch (err) {
    res.json({ msg: "something happened" });
  }
};

const deleteAnnouncement = async (req, res) => {
  try {
    const name = req.params.name;

    const deletedAnnouncement = await Announcement.findOneAndDelete({ name });

    res.json({
      announcement: deletedAnnouncement,
      msg: "announcement has been deleted",
    });
  } catch (err) {
    res.json({ msg: "announcement could not be deleted" });
  }
};
module.exports = {
  getAnnouncement,
  postAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
