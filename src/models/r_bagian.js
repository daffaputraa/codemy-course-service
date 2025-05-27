const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const r_bagian = sequelize.define("r_bagian", 
    {
        rbagian_id : {
            type : DataTypes.UUID,
            allowNull : false, 
            primaryKey : true, 
            defaultValue : DataTypes.UUIDV4
        },
        rbagian_judul : {
            type : DataTypes.CHAR,
            allowNull : false, 
        },
        rbagian_nomor : {
            type : DataTypes.INTEGER,
            allowNull : false, 
        },
        mkursus_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'm_kursus',
                key: 'mkursus_id'
            }
        }
    }, 
    {
        tableName : "r_bagian",
        timestamps : false
    }
)

module.exports = r_bagian;