import express from 'express';

import { authenticateToken } from '../utils/authenticate';
import controller from '../controllers/customer_kyc';

const router = express.Router();

router.post('/save_image', authenticateToken, controller.saveImage);
router.post('/get_image', authenticateToken, controller.getImage);
router.post('/get_all_image', authenticateToken, controller.getAllImages)
router.post('/delete_image', authenticateToken, controller.deleteImage);

export = router;
