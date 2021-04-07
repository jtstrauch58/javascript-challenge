// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use entered date range to find sightings
var thead = d3.select("thead>tr");
var headerKeys = Object.keys(data[0]);

for (i=0; i<headerKeys.length; i++) {
  var row = thead.append("th")
  row.text(headerKeys[i])
}
 
var tbody = d3.select("tbody");
data.forEach(function(sitings) {
      var row = tbody.append("tr");
      Object.entries(sitings).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      });
    });

var update = d3.select("#button-newUFO");
var form = d3.select("#form-newUFO");

update.on("click", appendUFOUpdate);
form.on("submit", appendUFOUpdate);

function appendUFOUpdate () {
  d3.event.preventDefault();
  console.log("An entry was made!");
  var inputElement = d3.select("#text-newUFO");
  var inputValue = inputElement.property("value");
  var newData = inputValue.split(", ");
  console.log(newData);
  
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
  var tbody = d3.select("tbody");
  var row = tbody.append("tr");
  Object.entries(newEntry).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);})
};