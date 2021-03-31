const db = require("../db.js");

// constructor
const Report = function(report) {
  rid, 
  country, 
  city, 
  zipcode, 
  street, 
  latitude, 
  longitude, 
  date_time, 
  category, 
  description
};

Customer.create = (newCustomer, result) => {
  db.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Customer.getReports = function (result) {
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