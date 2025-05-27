const {
    createBagianRepository,
    getAllBagianRepository,
    getBagianByIdRepository,
    updateBagianRepository,
    deleteBagianRepository
} = require("./bagian.repository");

exports.createBagianService = async (data) => {
    return await createBagianRepository(data);
};

exports.getAllBagianService = async () => {
    return await getAllBagianRepository();
};

exports.getBagianByIdService = async (id) => {
    if (!id) throw new Error("ID wajib diisi");
    return await getBagianByIdRepository(id);
};

exports.updateBagianService = async (id, data) => {
    if (!id) throw new Error("ID wajib diisi");
    const updated = await updateBagianRepository(id, data);
    if (!updated) throw new Error("Data tidak ditemukan atau gagal diupdate");
    return updated;
};

exports.deleteBagianService = async (id) => {
    if (!id) throw new Error("ID wajib diisi");
    const deleted = await deleteBagianRepository(id);
    if (!deleted) throw new Error("Data tidak ditemukan atau gagal dihapus");
    return deleted;
};
