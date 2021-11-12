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
  this.report_description = report.report_description
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

Report.getFilteredReports = function(params, result) {

  var conditions = [];
  var values = [];

  if (typeof params.country !== 'undefined') {
    conditions.push("country = ?");
    values.push(params.country);
  }

  if (typeof params.state !== 'undefined') {
    conditions.push("state = ?");
    values.push(params.state);
  }

  if (typeof params.county !== 'undefined') {
    conditions.push("county = ?");
    values.push(params.county);
  }

  if (typeof params.city !== 'undefined') {
    conditions.push("city = ?");
    values.push(params.city);
  }

  if (typeof params.zipcode !== 'undefined') {
    conditions.push("zipcode = ?");
    values.push(params.zipcode);
  }

  if (typeof params.category !== 'undefined') {
    conditions.push("category = ?");
    values.push(params.category);
  }

  if (typeof params.startDate !== 'undefined') {
    conditions.push("date_time >= ?");
    values.push(params.startDate);
  }

  if (typeof params.endDate !== 'undefined') {
    conditions.push("date_time <= ?");
    values.push(params.endDate);
  }

  var whereClause = conditions.length ? 'WHERE ' + conditions.join(' AND ') : ''
  var queryString = 'SELECT * FROM table ' + whereClause;
  
  db.query(queryString, values, function (err, res) {

          if(err) {
              console.log("error: ", err);
              result(null, err);
          }
          else{
            console.log('tasks : ', res);  

           result(null, res);
          }
      });   
}

module.exports = Report;