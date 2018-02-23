$(document).ready(function() {

  $('#listofQs').hide();
  $('#results').hide();
  $('#startquiz').click(function() {
  $('#listofQs').show();
  $('#startquiz').hide();
  });

	var intervalId;
	var clockRunning = false;
	var timeRemain = 15;

	var numberCorrect = 0;
	var numberIncorrect = 0;
	var numberUnanswered = 0;

  $("#startquiz").on("click", function() {
  	start();
  });




  function start() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        console.log(timeRemain)
    }
  };

  function stop() {
    clearInterval(intervalId);
    clockRunning = false;
    $('#listofQs').hide();
    $('#results').show();
    checkAnswers();
  };

	function count () {
		timeRemain--;
		$('#timer').html(' Time Remaining: ' + timeRemain);
		console.log(timeRemain)

        if(timeRemain <= 0){
        	stop();
        }

	};

	function checkAnswers(){
		var answers = $('input:checked');
		answers.each(function(index, ele){
			console.log(ele)
			if(ele.getAttribute('correct') == "true"){
				console.log("Yes");
			}else{
				console.log("No");
			}
		});

	function answersCorrect(){
		if(ele.getAttribute('correct') == "true"){
			numberCorrect++;
		}
		$('#cA').html('Correct Answers: ' + numberCorrect);
	};

	function answersIncorrect() {
		if(ele.getAttribute('correct') == "false"){
			numberIncorrect++;
		}
		$('#iC').html('Incorrect Answers ' + numberIncorrect);
	};
}


// var theAnswers = [
// "Baltimore Orioles",
// "Montreal Expos",
// "Barry Bonds",
// "Fenway Park",
// "Houston Astros",
// "Michael Jordan",
// "Dominican Republic",
// "Cooperstown, NY",
// "Chicago, IL",
// "Houston Astros",
// ];

});
