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
  var radiusResults = []
  var radiusFlag = false

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

  // check if radius is a factor, if so set a flag to indicate so later
  // we make sure that both radius and center are type undefined
  if (typeof params.radius !== 'undefined' && typeof params.centerlat !== 'undefined'
  && typeof params.centerlng !== 'undefined') {
      // set radiusFlag to true, and parse center and radius
      radiusFlag = true
      center = {lat: parseFloat(params.centerlat) , lng: parseFloat(params.centerlng)}
      radius = params.radius
  }

  var whereClause = conditions.length ? 'WHERE ' + conditions.join(' AND ') : ''
  var queryString = 'SELECT * FROM report_schema.reports ' + whereClause;
  
  db.query(queryString, values, function (err, res) {

          if(err) {
              console.log("error: ", err);
              result(null, err);
          }
          else{
            // Here we sort through and only keep
            // results that fit inside our radius
            if (radiusFlag) {
              // go through all points returned by the db query
              for (const point of res) {
                if (withinRadius(point, center, radius))
                  radiusResults.push(point)
              }
              
              console.log('filtered results: ', radiusResults)
              // return filetered results
              result(null, radiusResults)
            } else {
              console.log('tasks : ', res);  
              result(null, res);
            }
          }
      });   
}

function withinRadius(point, center, radiuskm) {
  var ky = 40000 / 360;
  var kx = Math.cos(Math.PI * center.lat / 180.0) * ky;
  var dx = Math.abs(center.lng - point.longitude) * kx;
  var dy = Math.abs(center.lat - point.latitude) * ky;
  return Math.sqrt(dx * dx + dy * dy) <= radiuskm;
}

module.exports = Report;