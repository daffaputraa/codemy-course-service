const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const r_kategori = sequelize.define('r_kategori', 
    {
        rkategori_id : {
            type : DataTypes.STRING(10),
            primaryKey : true,
            allowNull : false
        },
        rkategori_nama : {
            type : DataTypes.STRING(40),
            allowNull : false
        },
        rkategori_thumbnail: {
            type : DataTypes.STRING(255),
            allowNull : false,
            comment : 'Path atau url untuk gambar'
        },
    }
)

module.exports = r_kategori;