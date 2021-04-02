const { Model, DataTypes } = require("sequelize")

class Friend extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cellphone: DataTypes.STRING,
            email: DataTypes.STRING,
            instagram: DataTypes.STRING,
            address: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Friend