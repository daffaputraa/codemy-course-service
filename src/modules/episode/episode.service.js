const { createEpisodeRepository } = require("./episode.repository");

exports.createEpisodeService = async (data) => {
    return await createEpisodeRepository(data);
}
