const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const m_episode = sequelize.define(
    "r_episode",
    {
        repisode_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
            repisode_nomor: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
            repisode_judul: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
            repisode_deskripsi: {
            type: DataTypes.TEXT, 
            allowNull: true,
        },
            repisode_url: {
            type: DataTypes.STRING, 
            allowNull: true,
        },
            rbagian_id : {
                type : DataTypes.UUID, 
                allowNull : false, 
                references : {
                    model : "r_bagian",
                    key : "rbagian_id"
                }
            }
    },
    {
        tableName: "r_episode",
        timestamps: false, 
    }
);

module.exports = m_episode;