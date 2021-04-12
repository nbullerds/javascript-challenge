var tableData = data;

console.log(data);

var tbody = d3.select("tbody");

//Create a row for each instance of data in data.js
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
});