exports.responBerhasil = ({data, message}) =>{
    return {res_code : "0000", data : data, res_message : message}
}

exports.responGagal = ({ code, message }) => {
    return { res_code: code, res_message: message };
};