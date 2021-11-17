var express = require('express');
var reportsController = require('../controllers/reportController.js');
var router = express.Router();



router.get('/api/map', reportsController.list_all_reports);

router.get('/api/get-filtered-reports', reportsController.get_filtered_reports);

router.post('/api/upload-report', reportsController.create_a_report);



module.exports = router;