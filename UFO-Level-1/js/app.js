// import from data.js
var tableData = data;

// Select main table header
var thead = d3.select("thead>tr");

// determine array keys
var headerKeys = Object.keys(tableData[0]);

// append array keys to table header
for (i=0; i<headerKeys.length; i++) {
  var row = thead.append("th")
  row.text(headerKeys[i])
}

// select body of main table to insert data rows
var tbody = d3.select("tbody");

// insert table data using forEach
tableData.forEach(function(sitings) {
      var row = tbody.append("tr");
      Object.entries(sitings).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      });
});

// set up event listener for button click and keyboard click
var update = d3.select("#button-newUFO");
var form = d3.select("#form-newUFO");

update.on("click", appendUFOUpdate);
form.on("submit", appendUFOUpdate);

// append user input to the html table with new event
// split the input string into array by splitting by ',' and space
// send input to console for a second check

function appendUFOUpdate () {
  d3.event.preventDefault();
  console.log("An entry was made!");
  var inputElement = d3.select("#text-newUFO");
  var inputValue = inputElement.property("value");
  var newData = inputValue.split(", ");
  console.log(newData);

// create new array object and send to console

  var newEntry = {
      datetime: newData[0],
      city: newData[1],
      state: newData[2],
      country: newData[3],
      shape: newData[4],
      durationMinutes: newData[5],
      comments: newData[6]
    };
    console.log(newEntry);

// select main table and append the new data set

  var tbody = d3.select("tbody");
  var row = tbody.append("tr");
  Object.entries(newEntry).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);})
};

// set up search functionality
// first set up listener group for button click and keyboard select

var searchDate = d3.select("#button-dateSearch");
var formDate = d3.select("#form-dateSearch");

searchDate.on("click", searchUFODate);
formDate.on("submit", searchUFODate);

// set up function to select user search date
// filter the data set for the specified date

function searchUFODate () {
  d3.event.preventDefault();
  console.log("An date search was made!");
  var inputElement = d3.select("#text-dateSearch");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  function searchDate (tableData) {
    return tableData.datetime == inputValue;
  }
  var ufoDateData = tableData.filter(searchDate);
  console.log(ufoDateData);

// make new table to show filter results

  var thead = d3.select("#head-dateSearch");
  var tr = thead.append("tr");
  var headerKeys = Object.keys(tableData[0]);

// add header

  for (i=0; i<headerKeys.length; i++) {
    var row = thead.append("th")
    row.text(headerKeys[i])
  };

// add table data

  var tbody = d3.select("#body-dateSearch");
  console.log(tbody);
  ufoDateData.forEach(function(sitings) {
        var row = tbody.append("tr");
        Object.entries(sitings).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        });
  });
};