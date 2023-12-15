const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const RaceTeam = sequelize.define("RaceTeam", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  calling: { type: DataTypes.STRING, unique: true },
  country: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "TeamRepresentative" },
});

const Racer = sequelize.define("Racer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  winners: { type: DataTypes.STRING },
});

const Race = sequelize.define("Race", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  calling: { type: DataTypes.STRING },
  place: { type: DataTypes.STRING },
  date: { type: DataTypes.DATE },
});

const Cars = sequelize.define("Cars", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  marks: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },
  housepower: { type: DataTypes.INTEGER },
});

RaceTeam.hasOne(Racer);
Racer.belongsTo(RaceTeam);

RaceTeam.hasOne(Cars);
Cars.belongsTo(RaceTeam);

Cars.hasOne(Racer);
Racer.belongsTo(Cars);

Cars.hasOne(Race);
Race.belongsTo(Cars);

Racer.hasOne(RaceTeam);
RaceTeam.belongsTo(Racer);

Racer.hasOne(Race);
Race.belongsTo(Racer);

Racer.hasOne(Cars);
Cars.belongsTo(Racer);

module.exports = {
  RaceTeam,
  Racer,
  Race,
  Cars,
};
