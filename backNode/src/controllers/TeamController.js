const Team = require('../models/Team');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const teams = await Team.findAll();

        return res.json(teams);
    },
    async store(req, res) {
        const {  name , location} = req.body;
        const team = await Team.create({ name, location});

        return res.json(team);
    },
    async postTeam(req, res) {
        const { user_id } = req.params;
        const { name, location } = req.body;

        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({ error: 'User not found'});
        }

        const [ team ] = await Team.findOrCreate({
            where: { name, location }
        });

        await user.addTeam(team);

        return res.json(team);
    },

    async getTeam (req, res) {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id, {
            include: { association: 'teams', attributes: ['id','name', 'location'],through: { attributes: []}}
        })

        return res.json(user);
    }
}