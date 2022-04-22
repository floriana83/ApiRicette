import express from "express";

import {getAllRicette, getRicetteById, insertRicetta, UpdateRicettaById, DeleteRicettaById} from '../controllers/ricette.js'

const router = express.Router();

router.get('/', getAllRicette)
router.get('/:id', getRicetteById)
router.post('/', insertRicetta)
router.delete('/:id', DeleteRicettaById)
router.patch('/:id', UpdateRicettaById)
export default router;
