const express = require('express');
const router = express.Router();
const MaterialController = require('../controllers/materialController');


router.post('/', MaterialController.createMaterial);
router.get('/', MaterialController.getAllMaterial);
router.patch('/:material_id', MaterialController.updateMaterial);
router.delete('/:material_id', MaterialController.deleteMaterial);

// router.get('/', async (req, res) => {
//   try {
//     const materials = await Material.findAll();
//     res.json(materials);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
