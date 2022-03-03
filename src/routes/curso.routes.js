import { Router } from 'express'
import * as cursoController from '../controllers/curso.controllers'
import { authEmployeeJwt, verifyEmployee } from '../middlewares'

const router = Router();


router.get("/", [authEmployeeJwt.verifyToken, authEmployeeJwt.isDueño], cursoController.getCurso);

router.put("/:CursoId", cursoController.updateCursoById);

router.post("/", cursoController.createCurso);


export default router;
