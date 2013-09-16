// Bar chart with SVGs
// ---------------------------------------------
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
        11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

// Width and height
var w = 500;
var h = 100;
var calcWidth = w / dataset.length;
var barPadding = 1;

// create the SVG element
var svg = d3.select('body').append('svg').attr('width', w).attr('height', h);

svg.selectAll('rect').data(dataset).enter().append('rect').attr('x', function(d, i) {
      return i * calcWidth;
})
.attr('y', function(d) {
    return h - (d * 4);
})
.attr('width', calcWidth - barPadding)
.attr('height', function(d) {
    return d * 4;
})
.attr('fill', function(d) {
    return 'rgb(0, 0, ' + (d * 10) + ')';
});

svg.selectAll('text').data(dataset).enter()
.append('text')
.text(function(d) {
    return d;
})
.attr('x', function(d, i) {
    return i * calcWidth + (calcWidth - barPadding) / 2;
})
.attr('y', function(d, i) {
    // return h - (d * 4) + 14;
    return h - (d * 2) + 5;
})
.attr("text-anchor", "middle")
.attr("font-family", "sans-serif")
.attr("font-size", "11px")
.attr("fill", "white");
