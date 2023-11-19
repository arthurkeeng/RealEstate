const {
  getAnnouncement,
  postAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} = require("../controllers/announcementControllers");

const router = require("express").Router();

router.get("/", getAnnouncement);
router.post("/", postAnnouncement);

router.patch("/:name", updateAnnouncement);

router.delete("/:name", deleteAnnouncement);

module.exports = router;
