var Report = require('../models/reportModel.js');
const {Client} = require("@googlemaps/google-maps-services-js");

const list_all_reports = function(req, res) {
  Report.getAllReports(function(err, reports) {

    console.log('controller');

    if (err)
      res.send(err);

    console.log('res', reports);
    res.send(reports);
  });
};

const create_a_report = function(req, res) {

  const client = new Client({});
  
  client.reverseGeocode({
    params: {
      latlng: {lat: parseFloat(req.body.lat) , lng: parseFloat(req.body.lng)},
      key: "AIzaSyAQw10ndgEutTniHm00lcLXAnZVbBFEweM"
    },
    timeout: 1000, // milliseconds
  })
  .then((response) => {
    if (response.data.results[0]) {
      addressComponents = new Object();
      componentObjectList = response.data.results[0].address_components
      for (const component of componentObjectList) {
        for (const type of component.types) {
          switch(type) {
            case "country":
                addressComponents.country = component.short_name
                break;
            case "administrative_area_level_1":
                addressComponents.state = component.short_name
                break;
            case "administrative_area_level_2":
                addressComponents.county = component.short_name
                break;
            case "sublocality":
            case "locality":
            case "sublocality_level_1":
                addressComponents.city = component.short_name
                break;
            case "postal_code":
                addressComponents.zipcode = component.short_name
                break;
            case "street_number":
                addressComponents.street_number = component.short_name
                break;
            case "route":
                addressComponents.street_name = component.short_name
                break;
            default:
                // code block
          }
        }
      }
      // add extra values that aren't added in geocode_API_call
      addressComponents.latitude = req.body.lat
      addressComponents.longitude = req.body.lng
      addressComponents.date_time = req.body.date_time
      addressComponents.category = req.body.category
      addressComponents.report_description = req.body.report_description
      
      var new_report = new Report(addressComponents)

      //handles null error 
      if(!new_report){
        res.status(400).send({ error:true, message: 'empty report submitted' });
      }
      else{
        Report.createReport(new_report, function(err, report) {
          if (err)
            res.send(err);
          res.json(report);
        });
      }

    } else {
      console.log("No results found");
    }
  })
  .catch((e) => console.log("Reverse Geocoder failed due to: " + e));

  // //handles null error 
  // if(!new_report){

  //           res.status(400).send({ error:true, message: 'empty report submitted' });

  //       }
  // else{
  
  //         Report.createReport(new_report, function(err, report) {
    
  //           if (err)
  //             res.send(err);
            
  //           res.json(report);
  //         });
  // }
};

const geocode_API_call = function(req, res) {
  const client = new Client({});
  
  client.reverseGeocode({
      params: {
        latlng: {lat: parseFloat(req.body.lat) , lng: parseFloat(req.body.lng)},
        key: "AIzaSyAQw10ndgEutTniHm00lcLXAnZVbBFEweM"
      },
      timeout: 1000, // milliseconds
    })
    .then((response) => {
      if (response.data.results[0]) {
        addressComponents = new Object();
        componentObjectList = response.data.results[0].address_components
        for (const component of componentObjectList) {
          for (const type of component.types) {
            switch(type) {
              case "country":
                  addressComponents.country = component.short_name
                  break;
              case "administrative_area_level_1":
                  addressComponents.state = component.short_name
                  break;
              case "administrative_area_level_2":
                  addressComponents.county = component.short_name
                  break;
              case "sublocality":
              case "locality":
              case "sublocality_level_1":
                  addressComponents.city = component.short_name
                  break;
              case "postal_code":
                  addressComponents.zip = component.short_name
                  break;
              case "street_number":
                  addressComponents.street_number = component.short_name
                  break;
              case "route":
                  addressComponents.street_name = component.short_name
                  break;
              default:
                  // code block
            }
          }
        }
        // add extra values that aren't added in geocode_API_call
        addressComponents.lat = req.body.lat
        addressComponents.lng = req.body.lng
        addressComponents.date_time = req.body.date_time
        addressComponents.category = req.body.category
        addressComponents.report_description = req.body.report_description
        // res.send(addressComponents);
        return addressComponents

      } else {
        console.log("No results found");
      }
    })
    .catch((e) => console.log("Reverse Geocoder failed due to: " + e));
}

const get_filtered_reports = function(req, res) {

  Report.getFilteredReports(req.body, function(err, reports) {

    if (err)
      res.send(err);

    console.log('res', reports);
    res.send(reports);
    
  });

};

module.exports = {
  list_all_reports, 
  create_a_report, 
  get_filtered_reports,
  geocode_API_call
}

