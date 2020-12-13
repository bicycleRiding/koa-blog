const Router = require("koa-router")
const routesList = require("../routes")
const compose = require("koa-compose")

const rootRouter = new Router()

const routesHandler = (options = {}) => {
	rootRouter.use(...routesList)
	return compose([
		rootRouter.routes(),
		rootRouter.allowedMethods()
	])
}

module.exports = routesHandler
