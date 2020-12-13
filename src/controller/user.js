/**
 * @type {Custom.Controller}
 */
const userController = {
	async index(ctx, next) {
		const hasArticles = ctx.querystring === "hasArticles"

		const users = await ctx.model.User.findAll({
			attributes: {
				exclude: ["password"]
			},
			include: hasArticles ? ctx.model.Article : false
		})
		ctx.success(users)
		await next()
	},
	async show(ctx, next) {
		const { id } = ctx.params
		const hasArticles = ctx.querystring === "hasArticles"

		const user = await ctx.model.User.findByPk(id, {
			attributes: { exclude: ["password"] },
			include: hasArticles ? ctx.model.Article : false
		})

		if (!user) {
			return ctx.success(
				"未找到该资源, 请确认params-id",
				404
			)
		}
		ctx.success(user)
		await next()
	},
	async create(ctx, next) {
		const { name, password } = ctx.request.body
		const user = await ctx.model.User.create({
			name,
			password
		})
		delete user.dataValues.password
		ctx.success(user)
		await next()
	},
	async update(ctx, next) {
		const { id } = ctx.params
		const { name, password } = ctx.request.body
		const [isUpdated] = await ctx.model.User.update(
			{
				name,
				password
			},
			{ where: { id } }
		)
		ctx.success({
			isUpdated: isUpdated ? true : false
		})
		await next()
	},
	async destroy(ctx, next) {
		const { id } = ctx.params
		const destroyCount = await ctx.model.User.destroy({
			where: { id }
		})
		ctx.success({
			isDestroyed: destroyCount ? true : false
		})
		await next()
	}
}

module.exports = userController
