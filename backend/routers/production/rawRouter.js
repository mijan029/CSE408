const express = require('express');
const router = express.Router();
const { createRaw, getAllRaws, getRawById, updateRaw, deleteRaw
         } = require('../../controllers/production/rawController'); 
const requireAuth = require('../../middleware/requireAuth')

//router.use(requireAuth);

router.post('/', createRaw);
router.get('/', getAllRaws);
router.get('/:id', getRawById);
router.put('/:id', updateRaw);
router.delete('/:id', deleteRaw);

module.exports = router;
