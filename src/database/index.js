const Sequelize = require('sequelize')
const configDB = require('../config/database')
const Category = require('../models/Category')

const connection = new Sequelize(configDB)

Category.init(connection)

module.exports = connection
