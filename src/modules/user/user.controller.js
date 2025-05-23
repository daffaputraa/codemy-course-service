const { listUser } = require('./user.service')
const { responBerhasil, responGagal } = require("../../middleware/logger_helper")

exports.getAllUser = async (req, res) => {
    try {
        const users = await listUser();
            res.status(200).json(
                responBerhasil({   
                    data : users, 
                    message : "Data semua user berhasil diambil!"
        }));        
    } catch (error) {   
        res.status(500).json(
                responGagal({
                    code : "0001", 
                    message : error
        }));
    }
}  