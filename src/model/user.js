const { Model, DataTypes } = require("sequelize")
const { useEncryption } = require("../use/fn")
const { PASSWORDSECRETKEY } = require("../config")

class User extends Model {}

const createUserModel = sequelize => {
	User.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "用户名不能为空"
					},
					notNull: {
						msg: "用户名不能为空"
					}
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "用户密码不能为空"
					},
					notNull: {
						msg: "用户密码不能为空"
					}
				},
				set(val) {
					const newVal = useEncryption(
						PASSWORDSECRETKEY,
						val
					)
					this.setDataValue("password", newVal)
				}
			}
		},
		{ sequelize }
	)
	return User
}

module.exports = createUserModel
