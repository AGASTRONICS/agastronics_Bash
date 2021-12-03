const express = require('express');
const router = express.Router();
const services = require('../services/render');

/**
 * @description Root Route
 * @method GET /
 */
router.get('/', services.homeRoutes);


module.exports = router;