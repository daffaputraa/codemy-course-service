const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const m_kursus = sequelize.define("m_kursus", {
    mkursus_id: {},
});