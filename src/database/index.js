const Sequelize = require('sequelize')
const configDB = require('../config/database')
const Category = require('../models/Category')
const Publisher = require('../models/Publisher')

const connection = new Sequelize(configDB)

Category.init(connection)
Publisher.init(connection)

module.exports = connection
