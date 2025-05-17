const { m_user } = require("../../models");

exports.getAllUser = async () => {
    return m_user.findAll()
}

