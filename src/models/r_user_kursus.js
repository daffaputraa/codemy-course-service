const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const r_user_kursus = sequelize.define('r_user_kursus', 
    {
        ruserkursus_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            primaryKey : true, 
            allowNull : false,
            autoIncrement : true
        },
        mkursus_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            references : {
                model : 'm_kursus',
                key : "mkursus_id"
            }
        },
        muser_id : {
            type: DataTypes.CHAR(16),
            allowNull : false,
            references : {
                model : 'm_user',
                key : "muser_id"
            }
        },
    }
)

module.exports = r_user_kursus;
