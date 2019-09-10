const controller = (req, res) => {
    res.send({ message: "Login" });
}
module.exports = {
    path: '/login',
    method: 'post',
    controller
};