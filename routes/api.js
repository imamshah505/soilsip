const express = require('express');
const router = express.Router();
const {
  postMoisture,
  getMoisture,
  setPumpState,
  getPumpState
} = require('../controller/sensorController');

// Define routes
router.post('/moisture', postMoisture);   
router.get('/moisture', getMoisture);      
router.post('/pump', setPumpState);      
router.get('/pump', getPumpState); 
module.exports = router;
