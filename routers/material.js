const express = require('express');
const router = express.Router();
const Material = require('../database/schemas/Material');

router.get('/', async (req, res) => {
  try {
    const materials = await Material.findAll();
    res.json(materials);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const material = await Material.findByPk(id);
//     if (!material) {
//       return res.status(404).send('x');
//     }
//     res.json(material);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
