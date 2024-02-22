const express = require('express');
const router = express.Router();
const {
    createPurchaseHistory,
    getAllPurchaseHistories,
    getPurchaseHistoryById,
    updatePurchaseHistory,
    deletePurchaseHistory
} = require('../../controllers/production/historyPurchaseRawController');

console.log("here????")

router.post('/', createPurchaseHistory);
router.get('/', getAllPurchaseHistories);
router.get('/:id', getPurchaseHistoryById);
router.put('/:id', updatePurchaseHistory);
router.delete('/:id', deletePurchaseHistory);
router.delete('/', deletePurchaseHistory);

module.exports = router;
