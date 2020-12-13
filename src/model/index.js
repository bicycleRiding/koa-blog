const { Sequelize } = require("sequelize")
const createArticleModel = require("./article")
const createUserModel = require("./user")

const useModel = modelConfig => {
	const sequelize = new Sequelize(modelConfig)

	const Article = createArticleModel(sequelize)
	const User = createUserModel(sequelize)

	/** 定义关联关系 */
	User.hasMany(Article, {
		foreignKey: "userId"
	})
	Article.belongsTo(User, {
		foreignKey: "userId"
	})

	sequelize.sync({ force: true })
	return {
		Article,
		User
	}
}

module.exports = useModel
