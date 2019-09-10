const sonicx = require('sonicx');
const userController = require('./controllers/user.controller');
const adminController = require('./controllers/admin.controller');

/**
 *  Note: 
 * 
 * sonicx is an singletone object, that means developer can define their routes any time any where in project scope.
 * 
 * First parameter of route method will get concate with each path property of routes defined in array.
 * 1.
 * sonicx.route('/user' ,[ { path: '/something' , ... } ];
 * ==> concate('/user' + '/something') => '/user/something'
 * 
 * 2.
 * sonicx.route('/user/' ,[ { path: 'something' , ... } ]
 * ==> concate('/user/' + 'something') => '/user/something'
 */


const isUser = (req, res, next) => {
    // SOME AUTH MECHANISM
    next();
}
const isAdmin = (req, res, next) => { 
    // SOME AUTH MECHANISM
    next();
}

// OMMITING PATH PARAMETERS ; 
sonicx.route('/user', [
    { method: 'get', middleware: isUser, controller: userController.getUser },
    { method: 'post', middleware: isUser, controller: userController.createUser },
    { method: 'put', middleware: isUser, controller: userController.editUser },
    { method: 'delete', middleware: isUser, controller: userController.deleteUser },
]);

// USING PATH PARAMETERS ; 
sonicx.route('/', [
    { path: 'admin', method: 'get', middleware: isAdmin, controller: adminController.getAdmin },
    { path: 'admin', method: 'post', middleware: isAdmin, controller: adminController.createAdmin },
    { path: 'admin', method: 'put', middleware: isAdmin, controller: adminController.editAdmin },
    { path: 'admin', method: 'delete', middleware: isAdmin, controller: adminController.deleteAdmin },
]);

// USING PATH PARAMETERS ; 
sonicx.route('/profile', [
    { path: '/userProfile', method: 'get', middleware: isUser, controller: userController.getProfile },
    { path: '/adminProfile', method: 'get', middleware: isAdmin, controller: adminController.getProfile },
]);

sonicx.listen(4000, () => console.log("Listening on 4000"));

// sonicx.secureListen(4000, {}, () => console.log("Listening on 4000"));

// User.getRoute = {
//     path: '',
//     middleware: (req, res, next) => { next(); },
//     controller: (req, res) => {
//     }
// }

// User.setRoute = {
//     path: '',
//     middleware: (req, res, next) => { next(); },
//     controller: (req, res) => {

//     }
// }

// User.deleteRute = {
//     path: '',
//     middleware: (req, res, next) => { next(); },
//     controller: (req, res) => {

//     }
// }

// module.exports = [];

// sonicx.route('/user', User );