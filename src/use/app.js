const Koa = require("koa")

class CustomKoa extends Koa {
	constructor() {
		super()
		this.extend()
	}
	useMiddlewareList(list) {
		const useHandle = this.use.bind(this)
		list.forEach(useHandle)
	}
	extend() {
		this.context.success = function (data, status = 200) {
			this.status = status
			this.body = { msg: "success", data }
		}

		this.context.fail = function (data, status = 500) {
			this.status = status
			this.body = { msg: "fail", data }
		}
	}
}

module.exports = CustomKoa
