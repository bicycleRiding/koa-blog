/**
 * @type {Custom.Controller}
 */
const articleController = {
	async index(ctx, next) {
		const articles = await ctx.model.Article.findAll({
			include: {
				model: ctx.model.User,
				attributes: ["id", "name"]
			}
		})
		ctx.success(articles)
		await next()
	},
	async show(ctx, next) {
		const { params } = ctx
		const { id } = params
		const article = await ctx.model.Article.findByPk(id, {
			include: {
				model: ctx.model.User,
				attributes: ["id", "name"]
			}
		})
		if (!article) {
			return ctx.success(
				"未找到该文章, 请确认params-id",
				404
			)
		}
		ctx.success(article)
		await next()
	},
	async create(ctx, next) {
		const {
			title,
			synopsis,
			content,
			type,
			userId
		} = ctx.request.body

		if (!userId) {
			ctx.throw(400, "创建文章请携带userId")
		}

		const article = await ctx.model.Article.create({
			title,
			synopsis,
			content,
			type,
			userId
		}).catch(err => {
			const isUserIdError = err.message.includes(
				"a foreign key constraint fails"
			)
			isUserIdError && ctx.throw("userId错误")
		})
		ctx.success(article)
		await next()
	},
	async update(ctx, next) {
		const { id } = ctx.params
		const {
			title,
			synopsis,
			content,
			type
		} = ctx.request.body

		const [isUpdated] = await ctx.model.Article.update(
			{
				title,
				synopsis,
				content,
				type
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
		const destroyedCount = await ctx.model.Article.destroy({
			where: { id }
		})
		const isDestroyed = destroyedCount ? true : false
		ctx.success({
			isDestroyed
		})
		await next()
	}
}

module.exports = articleController
