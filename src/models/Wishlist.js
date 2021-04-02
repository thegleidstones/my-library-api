const { Model, DataTypes } = require("sequelize");

class Wishlist extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            authorName: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Wishlist