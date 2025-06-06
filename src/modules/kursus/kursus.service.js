const { getAllKursusRepository, createKursusRepository, editKursusRepository, getKursusByIdRepository } = require("./kursus.repository");

exports.createKategoriService = async (data) => {
    return await createKursusRepository(data);
}

exports.getAllKursusService = async (data) => {
    return await getAllKursusRepository();
}

exports.editKursusService = async (id, data) => {
    if (!id) {
        throw new Error ('Masukkan ID terlebih dahulu!');
    }

    const updated = await editKursusRepository(id, data);
    if (!updated) {
        throw new Error('Ada kesalahan di repostitory, atau data tidak ada yang terupdate');
    }

    return updated; 
}

exports.getKursusByIdService = async (id) => {
    if (!id) {
        throw new Error("ID Perlu dimasukkan");
    }

    return await getKursusByIdRepository(id)
}