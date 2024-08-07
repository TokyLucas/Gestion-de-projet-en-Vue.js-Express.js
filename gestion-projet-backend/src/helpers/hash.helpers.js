const crypto = require('crypto');

// String hashers
const hash = (string) => {
    let hash = crypto.createHash('sha256');
    hash.update(`${string}-${process.env.PASSWORD_SALT}`);
    let hashed = hash.digest('hex');
    return hashed;
}

module.exports.hash = hash;