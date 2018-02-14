var serial; // variable to hold an instance of the serialport library
var fromSerial = 0; //variable to hold the data
var myRec = new p5.SpeechRec();

function triggerSpeechRec() {
  setInterval(initiateSpeechRec, 2000);
}

function initiateSpeechRec() {
  try {
    spRec.start(); // start engine
  } catch (err) {
    // do nothing.
  }
   // recognition callback
  console.log("start!!!!!!");
}


function setup() {
  createCanvas(320, 240);



  createCanvas(800, 400);
		background(255, 255, 255);
		fill(0, 0, 0, 255);
		// instructions:
		textSize(32);
		textAlign(CENTER);
		text("say something", width/2, height/2);
		myRec.onResult = showResult;
		myRec.start();
  	triggerSpeechRec()
}

function showResult()
	{
		if( myRec.resultString=="hypnotise" || myRec.resultString=="please") {
			background(192, 255, 192);
			text(myRec.resultString, width/2, height/2);
      myRec.resultValue = 56;
      var valueToSend = myRec.resultValue;
      // serial.write();
			// console.log(myRec.resultString);
        // var valueToSend = myRec.resultValue;
        // serial.write(valueToSend + ",");
      // var b = int(  brightness(myRec)   );
      // serial.write(valueToSend);
      console.log("worked");
		}
	}


function onStart() {
}

function draw() {
var valueToSend = myRec.resultValue;
  
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    println(i + " " + portList[i]);
  }
}

function serialEvent() {
  // this is called when data is recieved
}
