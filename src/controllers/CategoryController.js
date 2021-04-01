const Category = require("../models/Category")

module.exports = {

    async list(req, res) {
        const categories = await Category.findAll()

        res.json(categories)
    },

    async create(req, res) {
        const { name } = req.body
        const category = await Category.create({name})

        res.json(category)
    },

    async delete(req, res) {
        const { categoryId } = req.params
        const category = await Category.findByPk(categoryId)
        await category.destroy()

        res.json()
    }
}
