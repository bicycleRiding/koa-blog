const config = {}

config.PORT = 3000

/**
 * @type {import("sequelize").Options}
 */
config.MODEL = {
	database: "intersection",
	host: "" || "127.0.0.1",
	port: 3306,
	dialect: "mysql",
	username: "root",
	password: "12345678",
	sync: { alter: true },
	logging: false
}

config.PASSWORDSECRETKEY = "*(^%#HE^SAD)::"
config.USERTOKENSECRETKEY = "ASDHJASHD^&$$@::"

module.exports = config
