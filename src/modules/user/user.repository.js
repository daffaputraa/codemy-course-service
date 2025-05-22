const { m_user, m_kursus } = require("../../models");

exports.getAllUser = async () => {
        return m_user.findAll({
            include: {
                model : m_kursus,
                as: "akses_kursus",
                attributes: ["mkursus_id", "mkursus_judul"],
                through: {
                attributes: ["ruserkursus_id"],
                },
            },
        });
}

exports
