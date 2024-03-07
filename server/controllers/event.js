const Event = require("../models/Event");

const getEventForMain = async (req, res) => {
  try {
    const events = await Event.findAll({
      order: [["createdAt", "DESC"]],
      limit: 3,
    });

    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getAllEvent = async (req, res) => {
  try {
    const events = await Event.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const addAnEvent = async (req, res) => {
  try {
    const { jour, mois, titre, lieu, heure } = req.body;

    const event = await Event.create({ jour, mois, titre, lieu, heure });

    res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getEventForMain, getAllEvent, addAnEvent };
