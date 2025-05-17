const { getAllUser } = require('./user.repository')

exports.listUser = () => {
    return getAllUser()
}

