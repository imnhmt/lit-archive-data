import express from 'express';

import { authenticateToken } from '../utils/authenticate';
import customerKYCController from '../controllers/customerKYCController';
import company from '../controllers/companyController';
import merchant from '../controllers/merchantController';

const router = express.Router();

//----------------- Customer KYC Router -----------------//
router.post('/customer_kyc/save_image', authenticateToken, customerKYCController.saveImage);
router.post('/customer_kyc/get_image', authenticateToken, customerKYCController.getImage);
router.post('/customer_kyc/get_all_image', customerKYCController.getAllImages)
router.post('/customer_kyc/delete_image', authenticateToken, customerKYCController.deleteImage);

//----------------- Company Router -----------------//
router.post('/company/save', company.saveImage);
router.post('/company/get', company.getImage);
router.post('/company/delete', company.deleteImage);

//----------------- Merchant Router -----------------//
router.post('/merchant/save', merchant.saveImage);
router.post('/merchant/get', merchant.getImage);
router.post('/merchant/delete', merchant.deleteImage);

export = router;
