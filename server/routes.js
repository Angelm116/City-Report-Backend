
// This file contains the routes of the server
// Each route should execute a controller, a function inside of the reportControllers.js file

var express = require('express');
var reportsController = require('./reportController.js');
var router = express.Router();


// Route used to retrieve reports from the database
router.get('/api/get-reports', reportsController.get_reports);

// Route used to upload reports into the databse
router.post('/api/upload-report', reportsController.upload_report);


module.exports = router;