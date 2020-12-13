const articleRouter = require("./article")
const userRouter = require("./user")

const getRoutes = router => router.routes()

const routesList = [articleRouter, userRouter].map(
	getRoutes
)

module.exports = routesList
