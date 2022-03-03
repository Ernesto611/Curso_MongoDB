import { Router } from 'express'
import * as tiendaController from '../controllers/tienda.controllers'
//import { authtiendaJwt, verifytienda } from '../middlewares'

const router = Router();


router.get("/", tiendaController.getTienda);

router.put("/:TiendaId", tiendaController.updateTiendaById);

export default router;
