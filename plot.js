console.log(cityGrowths);

//sort cities by population growth
var sortedCities = cityGrowths.sort((a,b) =>
     a.Increase_from_2016 - b.Increase_from_2016).reverse();

//select the top 5 cites with highest growth
var topFiveCities = sortedCities.slice(0,5);

//prepare for graph and select x with city names and y with population growth
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

//plot graph
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
