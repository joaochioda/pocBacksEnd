const Color = require('../models/Color');

module.exports = {
    async index(req, res) {

        const color = await Color.findAll();

        return res.json(color);
    },
    async store(req, res) {
        const {  color } = req.body;
        const color_created = await Color.create({ color });

        return res.json(color_created);
    }

    
}