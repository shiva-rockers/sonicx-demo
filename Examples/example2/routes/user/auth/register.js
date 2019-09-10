const controller = (req, res) => {
    res.send({ message: "register" });
}
module.exports = {
    path: '/register',
    method: 'post',
    controller
};