/**
 * @type {Custom.MiddlewareHandler}
 */
const errorHandler = (options = {}) => {
	const { isThrowError = false } = options
	return async (ctx, next) => {
		try {
			await next()
			const { status, body } = ctx
			const isNotFound = status === 404 && !body
			if (isNotFound) {
				ctx.success("资源未找到", 404)
			}
		} catch (err) {
			let { status = 500, message = "" } = err
			const isProd = ctx.app.env === "prod"
			const isServerError = status === 500
			const isProdServerError = isProd && isServerError

			if (isProdServerError) {
				message = "服务端错误, 等候修复"
			}

			ctx.fail(message, status)

			if (isThrowError) {
				ctx.throw(message, status)
			}
		}
	}
}

module.exports = errorHandler
