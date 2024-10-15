const { addUserController, showForm, usersController} = require('../controllers/user.controller');
const router = require('express').Router();
router.get('/', showForm);
router.post('/home', addUserController);
router.get('/allUsers', usersController);

module.exports = router;