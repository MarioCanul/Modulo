const { Router } = require('express');

const router = Router();
const { createUser, getUser, getUsers, sesionLogin,updateUser, DeleteUser } = require('../controllers/sesion.controllers');
router.route('/')
    .get(getUsers)
    .post(createUser)
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(DeleteUser)
    router.route('/login/:matricula')
    .get(sesionLogin)
module.exports = router;