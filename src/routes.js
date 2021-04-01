const express = require('express')
const routes = express.Router()

const categoryController = require('./controllers/CategoryController')

routes.get('/categories', categoryController.list)
routes.post('/categories', categoryController.create)

module.exports = routes