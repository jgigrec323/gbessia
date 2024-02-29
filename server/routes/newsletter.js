const router = require("express").Router();
const { addEmail } = require("../controllers/newsletter");

router.post("/", addEmail);

module.exports = router;
