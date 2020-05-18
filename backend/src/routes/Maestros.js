const { Router } = require('express');

const router = Router();
const { createUser, getUser, getUsers, findUser,updateUser, DeleteUser } = require('../controllers/maestro.controllers');
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
