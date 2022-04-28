//This simulates a markov process, as only the present value of variable is relevant for predicting the future.

var stockprice;
var stockticker;
var time;
var counter = 0;
var sim={}; // for recording simulation results

  onEvent("Calculate", "click", function( ) {
    createRecord("User Input", {stockprice:getNumber("stockpriceinput")}, function(record) {
      sim.stockprice = getNumber("stockpriceinput");
    });
    time = getNumber("timeinput"); 
    for (var j = 0; j < 10; j++) { // this turns the function into a montecarlo simulation
      stockprice = getNumber("stockpriceinput");
      for (var i = 0; i < time*60 ; i++) {
        var stockticker = getText("stocktickerinput"); 
        var lowerbound = -(stockprice * 1.02);
        var upperbound = (stockprice* 1.02);
        var movement = randomNumber(lowerbound,upperbound)*0.001;
        stockprice += movement;
        
}
// need a counter to keep track of iterations
      counter = counter + 1;
      console.log("simulation " + counter + " price is " + stockprice);
    }//multiply by 60 to make it per minute
    
      // goals for tmrw:
      // finish up the data collection from users
      // start collecting and storing data from users
      
    
       
  });
  