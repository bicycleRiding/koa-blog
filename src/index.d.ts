import { Middleware } from "koa"
import { IRouterParamContext } from "koa-router"
import { ModelType } from "sequelize"
import config = require("./config.js")

declare module "koa" {
	interface DefaultContext extends IRouterParamContext {
		model: {
			Article: ModelType
			User: ModelType
		}
		success: (data: any, status?: number) => void
		fail: (data: any, status?: number) => void
		config: typeof config
	}
}

// 声明该模板文件为全局模块
export as namespace Custom

export declare type MiddlewareHandler<O = any> = (
	options: O
) => Middleware

export declare interface Controller {
	index: Middleware
	show: Middleware
	create: Middleware
	update: Middleware
	destroy: Middleware
	[p: string]: Middleware
}
