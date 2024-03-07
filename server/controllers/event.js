const Event = require("../models/Event");
const { Op } = require("sequelize");
const getEventForMain = async (req, res) => {
  try {
    const today = new Date();
    const events = await Event.findAll({
      where: {
        jour: {
          [Op.gte]: today,
        },
      },
      order: [["jour", "ASC"]],
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
    //const today = new Date();
    const events = await Event.findAll({
      order: [["jour", "ASC"]],
    });
    /* const events = await Event.findAll({
          where: {
            jour: {
              [Op.gte]: today,
            },
          },
          order: [["jour", "ASC"]],
        }); */

    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const addAnEvent = async (req, res) => {
  try {
    const { jour, titre, lieu, heure } = req.body;

    const event = await Event.create({ jour, titre, lieu, heure });

    res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getEventForMain, getAllEvent, addAnEvent };
