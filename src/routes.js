const express = require('express')
const routes = express.Router()

const categoryController = require('./controllers/CategoryController')
const publisherController = require('./controllers/PublisherController')
const authorController = require('./controllers/AuthorController')
const friendController = require('./controllers/FriendController')

routes.get('/categories', categoryController.list)
routes.post('/categories', categoryController.create)
routes.delete('/categories/:categoryId', categoryController.delete)

routes.get('/publishers', publisherController.list)
routes.post('/publishers', publisherController.create)
routes.delete('/publishers/:publisherId', publisherController.delete)

routes.get('/authors', authorController.list)
routes.post('/authors', authorController.create)
routes.delete('/authors/:authorId', authorController.delete)

routes.get('/friends', friendController.list)
routes.post('/friends', friendController.create)
routes.delete('/friends/:friendId', friendController.delete)

module.exports = routes