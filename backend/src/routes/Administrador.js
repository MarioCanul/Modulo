const { Router } = require('express');

const router = Router();
const { createCurso, getUser, getCursos, sesionUser,updateCurso, DeleteCurso } = require('../controllers/administrador.controllers');
router.route('/')
    .get(getCursos)
    .post(createCurso)
router.route('/:id')
    .get(getUser)
    .put(updateCurso)
    .delete(DeleteCurso)
    router.route('/sesion/:matricula')
    .get(sesionUser)
module.exports = router;
