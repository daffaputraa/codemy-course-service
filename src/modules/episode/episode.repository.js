const { m_episode } = require("../../models");

exports.createEpisodeRepository = async (payload) => {
    m_episode.create(payload)
}