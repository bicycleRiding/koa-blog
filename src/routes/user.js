const Router = require("koa-router")
const userController = require("../controller/user")

const userRouter = new Router({
	prefix: "/users"
})

userRouter.get("/", userController.index)
userRouter.get("/:id", userController.show)
userRouter.post("/", userController.create)
userRouter.put("/:id", userController.update)
userRouter.delete("/:id", userController.destroy)

module.exports = userRouter
