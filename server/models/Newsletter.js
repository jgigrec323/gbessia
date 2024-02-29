// newsletter.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Newsletter = sequelize.define(
  "Newsletter",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Chaque email doit être unique dans la base de données
      validate: {
        isEmail: true, // Vérifie que la valeur est un email valide
      },
    },
    subscribedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Valeur par défaut : date et heure actuelles
    },
  },
  {
    tableName: "newsletter",
    timestamps: false,
  }
);

module.exports = Newsletter;
