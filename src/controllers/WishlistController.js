const Wishlist = require("../models/Wishlist")

module.exports = {
    async list(req, res) {
        const wishlists = await Wishlist.findAll()

        res.json(wishlists)
    },

    async create(req, res) {
        const { title, authorName } = req.body
        const wishlist = await Wishlist.create({ title, authorName })

        res.json(wishlist)
    },

    async delete(req, res) {
        const { wishlistId } = req.params
        const wishlist = await Wishlist.findByPk(wishlistId)
        wishlist.destroy()

        res.json()
    }
}