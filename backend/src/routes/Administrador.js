const { Router } = require('express');

const router = Router();
const { createUser, getUser, getUsers, findUser,updateUser, DeleteUser } = require('../controllers/administrador.controllers');
router.route('/')
    .get(getUsers)
    .post(createUser)
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(DeleteUser)
    router.route('/user/:word')
    .get(findUser)
module.exports = router;
