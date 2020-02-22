const { UserController } = require('../controllers');
const cors = require('cors');

const routes = (api) => {
    api.use(cors());
    api.get('/user', (req, res) => UserController.one(req, res));
    api.put('/user_edit', (req, res) => UserController.edit(req, res));
    api.post('/user', (req, res) => UserController.new(req, res));
    api.delete('/user_erase', (req, res) => UserController.erase(req, res));
};

module.exports = routes;