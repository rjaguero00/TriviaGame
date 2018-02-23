$(document).ready(function() {

  $('#listofQs').hide();
  $('#results').hide();
  $('#startquiz').click(function() {
  $('#listofQs').show();
  $('#startquiz').hide();
  });

	var intervalId;
	var clockRunning = false;
	var timeRemain = 20;

	var numberCorrect = 0;
	var numberIncorrect = 0;
	var numberUnanswered = 0;

  $("#startquiz").on("click", function() {
  	start();
  });

  $("#submitquiz").on("click", function() {
    stop();
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
				answersCorrect();
			}else{
				answersIncorrect();
			}
				answersUnanswered();
		});

	function answersCorrect(){
			numberCorrect++;
			$('#cA').html('Correct Answers: ' + numberCorrect);
		};

	function answersIncorrect() {
			numberIncorrect++;
			$('#iC').html('Incorrect Answers: ' + numberIncorrect);
		};

	function answersUnanswered () {
		numberUnanswered = 10 - numberCorrect - numberIncorrect;
		$('#uA').html('Unanswered: ' + numberUnanswered);
	};

};


});
