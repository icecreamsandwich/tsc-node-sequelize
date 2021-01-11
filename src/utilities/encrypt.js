const bcrypt = require('bcryptjs');

/* export default class Encrypt {
    constructor() {
    } */

    encryptPassword = (password) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, encrypted) => {
                    resolve(encrypted);
                })
            })
        })
    }
    decryptPassword = (password, stored_password) => {
        bcrypt.compare(stored_password, password, (err, res) => {
            if (res) return "success"
        })
    }
/* } */

module.exports = {
    encryptPassword,
    decryptPassword
}


