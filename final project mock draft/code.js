
//startWebRequest("https://data.nasdaq.com/api/v3/datasets/WIKI/FB/data.json?api_key=-qiumoLa9PySr4UwypEy", function(status, type, content) {
//var jsonContent = JSON.parse(content);
//console.log(jsonContent);

//);

// math

var stockprice;
var stockticker;
var time;

  onEvent("Calculate", "click", function( ) {
    stockprice = getNumber("stockpriceinput");
  for (var i = 0; i < 4; i++) {
    var stockticker = getText("stocktickerinput");
    time = getNumber("timeinput")*3600;
    var lowerbound = (stockprice * 0.9);
    var upperbound = (stockprice* 1.1);
    var movement = randomNumber(-lowerbound,upperbound)*0.01;
    stockprice += movement;
    console.log(movement);
    console.log(stockprice);
    
}
  });
// my stockprice variable is not updating, how can I fix that?