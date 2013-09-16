// Basic example to create random bar charts out of DIVs in the DOM
// ----------------------------------------------
var dataset = [];
for (var i = 0; i < 25; i++) {
    var newNumber = Math.round(Math.random() * 30);
    dataset.push(newNumber);
}
d3.select("body").selectAll("div").data(dataset).enter().append("div").attr("class", "bar")
  .style("height", function(d) {
    var barHeight = d * 5;
    return barHeight + "px";
  });
