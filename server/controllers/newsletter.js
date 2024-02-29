const Newsletter = require("../models/Newsletter");
const { check, validationResult } = require("express-validator");
const addEmail = async (req, res) => {
  try {
    await check("email", "Please enter a valid email").isEmail().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({
        errors: errors.array(),
        status: false,
        message: errors
          .array()
          .map((error) => error.msg)
          .toString(),
      });
    }
    const { email } = req.body;
    const newEmail = await Newsletter.create({ email });

    if (!newEmail) {
      return res.status(200).json({
        message: "Erreur dans l'ajout, veuillez reessayer plus tard",
        status: false,
      });
    }

    res.status(200).json({
      message: "Merci de vous être abonné à notre newsletter !",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur dans l'ajout, veuillez reessayer plus tard",
      status: false,
    });
  }
};

module.exports = { addEmail };
