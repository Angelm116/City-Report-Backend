const db = require("../db.js");

// constructor
const Report = function(report) {
  this.country = report.country, 
  this.state = report.state,
  this.county = report.county,
  this.city = report.city, 
  this.zipcode = report.zipcode, 
  this.street_number = report.street_number, 
  this.street_name = report.street_name, 
  this.latitude = report.latitude, 
  this.longitude = report.longitude, 
  this.date_time = report.date_time, 
  this.category = report.category, 
  this.description = report.description
};

// "country":"", 
// "state":"",
// "county":"",
// "city":"", 
// "zipcode":"", 
// "street_number":"", 
// "street_name":"", 
// "latitude":"", 
// "longitude":"", 
// "date_time":"", 
// "category":"", 
// "description":""

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