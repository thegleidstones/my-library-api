const Friend = require("../models/Friend")

module.exports = {
    async list(req, res) {
        const friends = await Friend.findAll()

        res.json(friends)
    },

    async create(req, res) {
        const { name, cellphone, email, instagram, address } = req.body
        const friend = await Friend.create({ name, cellphone, email, instagram, address })

        res.json(friend)
    },

    async delete(req, res) {
        const { friendId } = req.params
        const friend = await Friend.findByPk(friendId)
        await friend.destroy()

        res.json()
    }
}