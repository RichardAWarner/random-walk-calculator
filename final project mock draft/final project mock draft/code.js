
//startWebRequest("https://data.nasdaq.com/api/v3/datasets/WIKI/FB/data.json?api_key=-qiumoLa9PySr4UwypEy", function(status, type, content) {
//var jsonContent = JSON.parse(content);
//console.log(jsonContent);

//);

// math

var stockprice;
var stockticker;
var time;
var counter;

  onEvent("Calculate", "click", function( ) {
    stockprice = getNumber("stockpriceinput");
    time = getNumber("timeinput"); 
    for (var j = 0; j < 20; j++) {
      stockprice = getNumber("stockpriceinput");
      for (var i = 0; i < time*60 ; i++) {
        var stockticker = getText("stocktickerinput"); 
        var lowerbound = -(stockprice * 1.02);
        var upperbound = (stockprice* 1.02);
        var movement = randomNumber(lowerbound,upperbound)*0.001;
        stockprice += movement;
        
}
counter++; // need a counter to keep track of iterations
      console.log("simulation " + counter + " price is " + stockprice);
    }//multiply by 60 to make it per minute
    
      // goals for tmrw:
      // fix counter problem
      // add record data so data can be pulled
      // start collecting and storing data from users
      
    
       
  });
  
// my stockprice variable is not updating, how can I fix that?
