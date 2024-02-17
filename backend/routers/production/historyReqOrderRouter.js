const express = require('express');
const router = express.Router();
const {
    createRequestOrder,
    getAllRequestOrders,
    getRequestOrderById,
    updateRequestOrder,
    deleteRequestOrder
} = require('../../controllers/production/historyReqOrderController');

router.post('/', createRequestOrder);
router.get('/', getAllRequestOrders);
router.get('/:id', getRequestOrderById);
router.put('/:id', updateRequestOrder);
router.delete('/:id', deleteRequestOrder);

module.exports = router;
