const { r_episode, r_bagian } = require("../../models");

exports.createEpisodeRepository = async (payload) => {
    return await r_episode.create(payload);
};

exports.getAllEpisodeRepository = async () => {
    return await r_episode.findAll({
        include: [
            {
                model: r_bagian,
                as: "r_bagian",
                attributes: ["rbagian_id", "rbagian_judul"]
            }
        ]
    });
};

exports.getEpisodeByIdRepository = async (id) => {
    return await r_episode.findByPk(id, {
        include: {
            model: r_bagian,
            as: "r_bagian",
            attributes: ["rbagian_id", "rbagian_judul"]
        }
    });
};

exports.updateEpisodeRepository = async (id, payload) => {
    const [updated] = await r_episode.update(payload, {
            where: { 
                repisode_id: id 
            } });
    return updated > 0;
};

exports.deleteEpisodeRepository = async (id) => {
    const deleted = await r_episode.destroy({ where: { repisode_id: id } });
    return deleted > 0;
};
