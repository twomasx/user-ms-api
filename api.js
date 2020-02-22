const xpr = require('express');
const api = xpr();
const port = 9001 || process.env.PORT;
const morgan = require('morgan');

const { link } = require('./config/db');

api.use(xpr.json());
api.use(morgan('combined'));
// connect to database
link();
// require routes
require('./config/routes')(api);

api.listen(port, () => console.log(`... user management system API listening on #${port}`));