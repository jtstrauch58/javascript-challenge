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

// Object.keys(data).forEach(function([key, value]) {
//   var row = thead.append("th")
//   console.log(row);
//   row.text(key)
//   console.log(key);
// }
// );


// 
// var tbody = d3.select("tbody");
// data.forEach(function(sitings) {
//       var row = tbody.append("tr");
//       Object.entries(sitings).forEach(function([key, value]) {
//       var cell = row.append("td");
//       cell.text(value);
//       });
//     });