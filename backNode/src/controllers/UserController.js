const User = require('../models/User');

module.exports = {
    async index(req, res) {

        const users = await User.findAll();

        return res.json(users);
    },
        async getById(req, res) {
            const { id } = req.params;
            const user = await User.findByPk(id,{
                include: [
                { association: 'teams', attributes: ['id','name', 'location'],through: { attributes: []}}, 
                { association: 'colors', attributes: ['color', 'id']}
            ]
            })

            return res.json(user);
        },
    
    async store(req, res) {
        const {  name , email} = req.body;
        const user = await User.create({ name, email});

        return res.json(user);
    },
    async update(req, res) {
        const { id } = req.params;
        const {color_id} = req.body;
        const user = await User.findByPk(id);
        user.update({
            color_id
        }).then(result =>{
         return res.json(user);
        }
          )
          .catch(err =>{
            return res.json('Houve algum erro '+err);
        }
          )

    }
}

   