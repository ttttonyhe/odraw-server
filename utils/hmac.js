const crypto = require("crypto");

const hmacEncrypt = (data, salt) => {
	let hmac = crypto.createHmac("md5", salt);
	return hmac.update(data).digest("base64");
};

module.exports = hmacEncrypt;
