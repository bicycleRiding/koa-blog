const { Model, DataTypes } = require("sequelize")

class Article extends Model {}

const createArticleModel = sequelize => {
	Article.init(
		{
			type: {
				type: DataTypes.ENUM,
				values: ["blogs", "books"],
				allowNull: false,
				comment: "文章类型[blog, books]",
				validate: {
					isIn: {
						msg: "文章类型请确定在[blogs, books]之间",
						args: [["blogs", "books"]]
					}
				}
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				comment: "文章标题",
				validate: {
					notNull: {
						msg: "文章标题不允许为空"
					},
					notEmpty: {
						msg: "文章标题不允许为空"
					}
				}
			},
			synopsis: {
				type: DataTypes.STRING,
				defaultValue: "",
				comment: "文章简介"
			},
			content: {
				type: DataTypes.STRING,
				defaultValue: "",
				comment: "文章内容"
			}
		},
		{ sequelize }
	)
	return Article
}

module.exports = createArticleModel
