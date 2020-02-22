const { connect } = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/user_ms_db';
const mongoConf = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
// require db models
const { User } = require('../models');

const db = {
    link: () => connect(mongoUri, mongoConf)
            .then(cnctd => console.log(`... you are connected to the ${cnctd.connections[0].name} \n` +
                                       `... existing models --> ${cnctd.modelNames()}`))
            .catch(error => console.log(`... error connecting to database --> ${error}`)) 
};

module.exports = db;