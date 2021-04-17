const db = require("../db.js");

// constructor
const Report = function(report) {
  this.rid = report.rid, 
  this.country = report.country, 
  this.city = report.city, 
  this.zipcode = report.zipcode, 
  this.street = report.street, 
  this.latitude = report.latitude, 
  this.longitude = report.longitude, 
  this.date_time = report.date_time, 
  this.category = report.category, 
  this.description = report.description
};

Report.createReport = (newReport, result) => {
  db.query(`INSERT INTO reports SET ?`, newReport, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created report: ", newReport);
    result(null, newReport);
  });
};

Report.getAllReports = function (result) {
  db.query("Select * from reports", function (err, res) {

          if(err) {
              console.log("error: ", err);
              result(null, err);
          }
          else{
            console.log('tasks : ', res);  

           result(null, res);
          }
      });   
};

module.exports = Report;