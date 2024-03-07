const router = require("express").Router();
const {
  getEventForMain,
  getAllEvent,
  addAnEvent,
} = require("../controllers/event");

router.get("/main", getEventForMain);
router.get("/all", getAllEvent);
router.post("/", addAnEvent);

module.exports = router;
