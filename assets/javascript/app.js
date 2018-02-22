$(document).ready(function() {

  $('#listofQs').hide();
  $('#results').hide();
  $('#startquiz').click(function() {
  $('#listofQs').show();
  $('#startquiz').hide();
  });

  var intervalId;
  var clockRunning = false;
  var stopwatch = 60;

  $("#startquiz").on("click", function() {
  	start();
  });




  function start() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        console.log(stopwatch)
    }
  };

  function stop() {
    clearInterval(intervalId);
    clockRunning = false;
  };

	function count () {
		stopwatch--;
		$('#gameTimer').html(stopwatch)
		console.log(stopwatch)
	};



var questions = [{
	question: "What team did Babe Ruth play for before joining the Boston Red Sox?",
	answers: ["New York Yankees", "Cincinnati Reds", "Baltimore Orioles", "Boston Braves"],
	correctAnswer: "Baltimore Orioles",
}, {
	question: "What team moved to D.C. to become the Washington Nationals in 2005?",
	answers: ["Montreal Expos", "Brooklyn Dodgers", "Kansas City Monarchs", "Tokyo Gaints"],
	correctAnswer: "Montreal Expos",
}, {
	question: "What player currently holds the record for most home runs in a season?",
	answers: ["Roger Maris", "Mark McGwire", "Babe Ruth", "Barry Bonds"],
	correctAnswer: "Barry Bonds",
}, {
	question: "What is the oldest active ball park in Major League Baseball?",
	answers: ["Fenway Park", "Wrigley Field", "Busch Stadium", "Minute Maid Park"],
	correctAnswer: "Fenway Park",
}, {
	question: "What team won the 2017 World Series?",
	answers: ["Los Angeles Dodgers", "New York Yankess", "Houston Astros", "St Louis Cardinals"],
	correctAnswer: "Houston Astros",
}, {
	question: "What basketball great made the decision to switch sports, signing a minor league baseball contract with the Chicago White Sox in 1994?",
	answers: ["Bo Jackson", "Michael Jordan", "Allen Iverson", "Karl Malone"],
	correctAnswer: "Michael Jordan",
}, {
	question: "What country has contributed the most players to Major League Baseball outside of the United States?",
	answers: ["Dominican Republic", "Mexcio", "Cuba", "Japan"],
	correctAnswer: "Dominican Republic",
}, {
	question: "Where is the National Baseball Hall of Fame and Museum located?",
	answers: ["Omaha, NE", "Springfield, MA", "Canton, OH", "Cooperstown, NY"],
	correctAnswer: "Cooperstown, NY",
}, {
	question: "Where was the first Major League Baseball All-Star Game played?",
	answers: ["Los Angeles, CA", "New York, NY", "Dallas, TX", "Chicago, IL"],
	correctAnswer: "Chicago, IL",
}, {
	question: "Who holds the highest career batting average of all time?",
	answers: ["Ted Williams", "Ty Cobb", "Jose Altuve", "Willie Mays"],
	correctAnswer: "Houston Astros",
}];

});
