const bodyParser = require("koa-body")

/** 自定义中间件 */
const errorHandler = require("./error-handler")
const routesHandler = require("./routes-handler")

const front = [errorHandler(), bodyParser()]

const behind = [routesHandler()]

const middlewareList = [front, behind].flat()

module.exports = middlewareList
