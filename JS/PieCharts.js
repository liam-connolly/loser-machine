google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Group', 'Wins'],
      ['Teams with a win',     217],
      ['Teams with no win',      82]
    ]);

    var options = {
        title: 'My Daily Activities',
        width: 900,
        height: 500,
        colors: ['#008000', '#ff0000'],
        pieSliceText: 'label',
        legend: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);

}
