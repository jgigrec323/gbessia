const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define(
  "Event",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jour: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lieu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heure: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: "event",
    timestamps: true,
  }
);

module.exports = Event;
