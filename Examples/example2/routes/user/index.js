const { route } = require('sonicx');
const loginRoute = require('./auth/login');
const registerRoute = require('./auth/register');


route('/user/auth', [loginRoute, registerRoute]);