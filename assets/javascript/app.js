$(document).ready(function() {

  var intervalId;
  var clockRunning = false;
  var stopwatch = 60;

  $("#startquiz").on("click", function() {
  	start();
  })


  function start() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        $('#gameTimer').html(gameTimer)
        console.log(stopwatch)
    }
  }
  function stop() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  }

	function count () {
		stopwatch--;
		console.log(stopwatch)
	}




var questions = [{
	question: "What team did Babe Ruth play for before joining the Boston Red Sox?",
	answers: ["New York Yankees", "Cincinnati Reds", "Baltimore Orioles", "Boston Braves"],
	correctAnswer: "Baltimore Orioles",
	image: "assets/images/borioles.png"
}, {
	question: "What team moved to D.C. to become the Washington Nationals in 2005?",
	answers: ["Montreal Expos", "Brooklyn Dodgers", "Kansas City Monarchs", "Tokyo Gaints"],
	correctAnswer: "Montreal Expos",
	image: "assets/images/borioles.png"
}, {
	question: "What player currently holds the record for most home runs in a season?",
	answers: ["Roger Maris", "Mark McGwire", "Babe Ruth", "Barry Bonds"],
	correctAnswer: "Barry Bonds",
	image: "assets/images/borioles.png"
}, {
	question: "What is the oldest active ball park in Major League Baseball?",
	answers: ["Fenway Park", "Wrigley Field", "Busch Stadium", "Minute Maid Park"],
	correctAnswer: "Fenway Park",
	image: "assets/images/borioles.png"
}, {
	question: "What team won the 2017 World Series?",
	answers: ["Los Angeles Dodgers", "New York Yankess", "Houston Astros", "St Louis Cardinals"],
	correctAnswer: "Houston Astros",
	image: "assets/images/borioles.png"
}, {
	question: "What basketball great made the decision to switch sports, signing a minor league baseball contract with the Chicago White Sox in 1994?",
	answers: ["Bo Jackson", "Michael Jordan", "Allen Iverson", "Karl Malone"],
	correctAnswer: "Michael Jordan",
	image: "assets/images/borioles.png"
}, {
	question: "What country has contributed the most players to Major League Baseball outside of the United States?",
	answers: ["Dominican Republic", "Mexcio", "Cuba", "Japan"],
	correctAnswer: "Dominican Republic",
	image: "assets/images/borioles.png"
}, {
	question: "Where is the National Baseball Hall of Fame and Museum located?",
	answers: ["Omaha, NE", "Springfield, MA", "Canton, OH", "Cooperstown, NY"],
	correctAnswer: "Cooperstown, NY",
	image: "assets/images/borioles.png"
}, {
	question: "Where was the first Major League Baseball All-Star Game played?",
	answers: ["Los Angeles, CA", "New York, NY", "Dallas, TX", "Chicago, IL"],
	correctAnswer: "Chicago, IL",
	image: "assets/images/borioles.png"
}, {
	question: "Who holds the highest career batting average of all time?",
	answers: ["Ted Williams", "Ty Cobb", "Jose Altuve", "Willie Mays"],
	correctAnswer: "Houston Astros",
	image: "assets/images/borioles.png"
}];

});
