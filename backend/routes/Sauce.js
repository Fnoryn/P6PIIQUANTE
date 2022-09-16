// import
const express = require('express');
const router = express.Router();
const saucesCtrl = require('../controllers/Sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// routes
router.get('/', auth,saucesCtrl.getAllSauces);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.post('/', auth, multer, saucesCtrl.createSauce);
router.post('/:id/like', auth, saucesCtrl.likeSauce);
router.put('/:id', auth,multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);


// export
module.exports = router;