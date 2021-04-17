var Report = require('../models/reportModel.js');

const list_all_reports = function(req, res) {
  Report.getAllReports(function(err, report) {

    console.log('controller');

    if (err)
      res.send(err);

    console.log('res', report);
    res.send(report);
  });
};

const create_a_report = function(req, res) {
  var new_report = new Report(req.body);
  
  //handles null error 
  if(!new_report.rid || !new_report.category){

            res.status(400).send({ error:true, message: 'empty report submitted' });

        }
  else{
  
          Report.createReport(new_report, function(err, report) {
    
           if (err)
            res.send(err);
            
          res.json(report);
  });
}
};

module.exports = {
  list_all_reports, 
  create_a_report
}

