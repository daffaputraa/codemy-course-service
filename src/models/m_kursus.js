const { DataTypes } = require('sequelize')
const sequelize = require('../config/db');

const m_kursus = sequelize.define("m_kursus", {
    mkursus_id: {
        type: DataTypes.INTEGER.UNSIGNED,        
        primaryKey : true,
        autoIncrement: true,
    },
    mkursus_judul: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    mkursus_deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    mkursus_thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    mkursus_price: {
        type: DataTypes.INTEGER(8),
        allowNull: false,
    },
    rkategori_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
            model: 'r_kategoris',
            key: "rkategori_id",
        },
},
});

module.exports = m_kursus;