const Router = require("koa-router")
const articleController = require("../controller/article")

const articleRouter = new Router({
	prefix: "/articles"
})

articleRouter.get("/", articleController.index)
articleRouter.get("/:id", articleController.show)
articleRouter.post("/", articleController.create)
articleRouter.put("/:id", articleController.update)
articleRouter.delete("/:id", articleController.destroy)

module.exports = articleRouter
