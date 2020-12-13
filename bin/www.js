const { server } = require("../src")
const { PORT } = require("../src/config")

const listeningListener = () =>
	console.log(`${PORT}服务已开启`)
server.listen(PORT, listeningListener)
