import { Router } from 'express';
import ListController from '../controllers/lists';

const router = Router();

router.get('/', ListController.list);
router.post('/', ListController.create);

router.get('/:id', ListController.get);

export default router;