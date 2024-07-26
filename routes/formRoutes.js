const express = require('express');
const { saveFormData } = require('../controllers/formController.js');

const router = express.Router();

// Route to handle form submission
router.post('/submit', saveFormData);

module.exports = router;