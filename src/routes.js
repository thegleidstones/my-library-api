const express = require('express')
const routes = express.Router()

const categoryController = require('./controllers/CategoryController')
const publisherController = require('./controllers/PublisherController')

routes.get('/categories', categoryController.list)
routes.post('/categories', categoryController.create)
routes.delete('/categories/:categoryId', categoryController.delete)

routes.get('/publishers', publisherController.list)
routes.post('/publishers', publisherController.create)
routes.delete('/publishers/:publisherId', publisherController.delete)

module.exports = routes