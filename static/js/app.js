// from data.js
var tableData = data;

// YOUR CODE HERE!
var ufoTable = d3.select("#ufo-table");
console.log(ufoTable);

data.forEach(function(datetime) {
    console.log(datetime);
    var row = ufoTable.append("tr");

    Object.entries(datetime).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filer-btn");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);

};
