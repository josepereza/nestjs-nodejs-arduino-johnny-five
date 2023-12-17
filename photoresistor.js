var five = require("johnny-five"),
  board,
  photoresistor;
const { Board, Led } = require("johnny-five");
board = new five.Board();

board.on("ready", function () {
  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 250,
  });
  const led = new Led(13);
  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: photoresistor,
  });

  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function () {
    if (this.value < 300){
     led.on();
    }else {
        led.off();
    }
  });
});
