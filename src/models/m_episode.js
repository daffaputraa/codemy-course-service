const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const m_episode = sequelize.define(
    "m_episode",
    {
        mepisode_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
        mepisode_nomor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
        mepisode_judul: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
        mepisode_deskripsi: {
        type: DataTypes.TEXT, 
        allowNull: true,
    },
        mepisode_url: {
        type: DataTypes.STRING, 
        allowNull: true,
    },
        mkursus_id: {
            type: DataTypes.INTEGER.UNSIGNED,        
            allowNull: false,
            references : {
                model : "m_kursus", 
                key : "mkursus_id"
            }
    },
    },
    {
        tableName: "m_episode",
        timestamps: false, 
    }
);

module.exports = m_episode;