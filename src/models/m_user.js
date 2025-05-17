const { DataTypes } = require("sequelize");
const sequelize = require('../config/db')
const Sequelize = require("sequelize");

const m_user = sequelize.define("m_user", {
    muser_id: {
        type: DataTypes.CHAR(16),
        primaryKey: true,
        allowNull: false,
    },
    muser_nama: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    muser_email: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    muser_password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    muser_date_register: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    muser_refferal_code : {
        type : DataTypes.STRING(10),
        allowNull : true
    }
},  { 
        hooks: {
        beforeCreate: (instance) => {
            instance.muser_id = null;
        }
    }
});

module.exports = m_user