var tableData = data;

//Create a row for each instance of data in data.js
function updateTable(data) {
    var tbody = d3.select("tbody");
    tbody.html("");
    data.forEach(ufoSighting => {
    var row = tbody.append("tr");

        //For each data element appened table data to the current table row
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

function filterSightings() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // filter data based on data input and display to console
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    updateTable(filteredData);
}

updateTable(data);
d3.select("#filter-btn").on("click", filterSightings);