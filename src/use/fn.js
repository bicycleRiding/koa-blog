const crypto = require("crypto")

const useEncryption = (secretKey, str) => {
	const sha1 = crypto.createHash("sha1")
	const hash = sha1.update(`${secretKey}${str}`)
	const cryptostr = hash.digest("hex")
	return cryptostr
}

module.exports = {
	useEncryption
}
