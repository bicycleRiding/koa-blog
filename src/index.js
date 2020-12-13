const CustomKoa = require("./use/app")
const useModel = require("./model")
const middlewareList = require("./middlewares")
const config = require("./config")

const app = new CustomKoa()

app.useMiddlewareList(middlewareList)
app.context.model = useModel(config.MODEL)
app.context.config = config

module.exports = { server: app }
