const Publisher = require("../models/Publisher");

module.exports = {
    async list(req, res) {
        const publishers = await Publisher.findAll()

        res.json(publishers)
    },

    async create(req, res) {
        const { name } = req.body

        const publisher = await Publisher.create({ name })

        res.json(publisher)
    }
}