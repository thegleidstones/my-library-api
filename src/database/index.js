const Sequelize = require('sequelize')
const configDB = require('../config/database')
const Author = require('../models/Author')
const Category = require('../models/Category')
const Friend = require('../models/Friend')
const Publisher = require('../models/Publisher')

const connection = new Sequelize(configDB)

Category.init(connection)
Publisher.init(connection)
Author.init(connection)
Friend.init(connection)

module.exports = connection
