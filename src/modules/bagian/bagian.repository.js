const { r_bagian } = require("../../models");

exports.createBagianRepository = async (data) => {
    return await r_bagian.create(data);
};

exports.getAllBagianRepository = async () => {
    return await r_bagian.findAll();
};

exports.getBagianByIdRepository = async (id) => {
    return await r_bagian.findByPk(id);
};

exports.updateBagianRepository = async (id, data) => {
    const [updated] = await r_bagian.update(data, { where: { rbagian_id: id } });
    return updated > 0;
};

exports.deleteBagianRepository = async (id) => {
    const deleted = await r_bagian.destroy({ where: { rbagian_id: id } });
    return deleted > 0;
};
