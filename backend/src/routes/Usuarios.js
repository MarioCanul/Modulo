const { Router } = require('express');

const router = Router();
const { createUser, getUser, getUsers, sesionUser,updateUser, DeleteUser } = require('../controllers/usuario.controllers');
router.route('/')
    .get(getUsers)
    .post(createUser)
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(DeleteUser)
    router.route('/sesion/')
    .get(sesionUser)
module.exports = router;
