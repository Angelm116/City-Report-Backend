
// This file contains the Report model. 
// This model is our representation of a report in terms of the database fields. 
// This model also serves as our means of communication with the reports database. 

const db = require("./db.js");

// Report Constructor
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


// Uploads given report into the database
Report.createReport = (newReport, result) => {
  
  // SQL Query
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

// Returns all the reports that satisfy all of the given filters
Report.getReports = function(req, result) {

  // Construct an SQL query based on the included filters

  var conditions = [];
  var values = [];
  var radiusResults = []
  var radiusFlag = false

  // Country
  if (typeof req.query.country !== 'undefined') {
    conditions.push("country = ?");
    values.push(req.query.country);
  }

  // State
  if (typeof req.query.state !== 'undefined') {
    conditions.push("state = ?");
    values.push(req.query.state);
  }

  // County
  if (typeof req.query.county !== 'undefined') {
    conditions.push("county = ?");
    values.push(req.query.county);
  }

  // City
  if (typeof req.query.city !== 'undefined') {
    conditions.push("city = ?");
    values.push(req.query.city);
  }

  // Zipcode
  if (typeof req.query.zipcode !== 'undefined') {
    conditions.push("zipcode = ?");
    values.push(req.query.zipcode);
  }

  // Category
  if (typeof req.query.category !== 'undefined') {
    conditions.push("category = ?");
    values.push(req.query.category);
  }

  // Start Date
  if (typeof req.query.startDate !== 'undefined') {
    conditions.push("date_time >= ?");
    values.push(req.query.startDate);
  }

  // End Date
  if (typeof req.query.endDate !== 'undefined') {
    conditions.push("date_time <= ?");
    values.push(req.query.endDate);
  }

  // check if radius is a factor, if so set a flag to indicate so later
  // we make sure that both radius and center are type undefined
  if (typeof req.query.radius !== 'undefined' && typeof req.query.centerlat !== 'undefined'
  && typeof req.query.centerlng !== 'undefined') {
      // set radiusFlag to true, and parse center and radius
      radiusFlag = true
      center = {lat: parseFloat(req.query.centerlat) , lng: parseFloat(req.query.centerlng)}
      radius = req.query.radius
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
              
              //console.log('filtered results: ', radiusResults)
              // return filetered results
              result(null, radiusResults)
            } else {
              //console.log('tasks : ', res);  
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