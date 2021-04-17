var express = require('express');
var reportsController = require('../controllers/reportController.js');
var router = express.Router();


router.get('/map', reportsController.list_all_reports);

router.post('/upload-report', reportsController.create_a_report);



module.exports = router;