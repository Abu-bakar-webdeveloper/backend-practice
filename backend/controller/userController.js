// desc Register new user
// route Post/api/users
// access public
const registerUser = (req, res) => {
    res.json({message: 'register user'})
}
// desc authenticate a user
// route Post/api/users/login
// access public
const loginUser = (req, res) => {
    res.json({message: 'login user'})
}
// desc Get user data
// route Post/api/users/me
// access public
const getMe = (req, res) => {
    res.json({message: 'User data'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}