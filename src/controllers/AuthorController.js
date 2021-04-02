const Author = require("../models/Author")

module.exports = {
    async list(req, res) {
        const authors = await Author.findAll()
        
        res.json(authors)
    },

    async create(req, res) {
        const { name, biografy } = req.body
        const author = await Author.create({ name, biografy })

        res.json(author)
    },

    async delete(req, res) {
        const { authorId } = req.params
        const author = await Author.findByPk(authorId)
        await author.destroy()

        res.json()
    }
}