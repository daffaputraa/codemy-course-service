const {
    createEpisodeRepository,
    getAllEpisodeRepository,
    getEpisodeByIdRepository,
    updateEpisodeRepository,
    deleteEpisodeRepository
} = require("./episode.repository");

exports.createEpisodeService = async (data) => {
    return await createEpisodeRepository(data);
};

exports.getAllEpisodeService = async () => {
    return await getAllEpisodeRepository();
};

exports.getEpisodeByIdService = async (id) => {
    if (!id) throw new Error("ID episode wajib diisi");
    return await getEpisodeByIdRepository(id);
};

exports.updateEpisodeService = async (id, data) => {
    if (!id) throw new Error("ID episode wajib diisi");

    const updated = await updateEpisodeRepository(id, data);
    if (!updated) throw new Error("Data tidak ditemukan atau gagal diupdate");

    return updated;
};

exports.deleteEpisodeService = async (id) => {
    if (!id) throw new Error("ID episode wajib diisi");

    const deleted = await deleteEpisodeRepository(id);
    if (!deleted) throw new Error("Data tidak ditemukan atau gagal dihapus");

    return deleted;
};
