(rightAnswers = 0),
  (wrongAnswers = 0),
  (unanswered = 0),
  (timer = 30),
  (answers = [
    "George Washington",
    "1789",
    "Fifty states of the United States",
    "Edsel",
    "Thomas Edison",
    "Christopher Columbus",
    "1850",
    "Michael Jackson",
    "New York",
    "France"
  ]);
userAnswer = [];

$(".maincontainer").hide();
$(".results").hide();

// $(document).ready(function(event) {

$("#start").on("click", function(event) {
  event.preventDefault();
  $("#intro").hide();
  $(".maincontainer").show();
  startCounting();
  return;
});

$("#complete").on("click", function(event) {
  event.preventDefault();
  $("#intro").hide();
  $(".maincontainer").hide();
  $(".results").show();
  // stopCounting();
  return;
});

startCounting = function(sec) {
  var sec = timer;
  setInterval(function() {
    document.getElementById("timer").innerHTML = " " + sec;
    if (sec <= -2) {
      clearTimeout(timer);
      $(".maincontainer").hide();
      Element.innerHTML = "<h2>Check the Results!</h2>";
      $(".results").show();
      collectResults();
    }
    sec--;
  }, 1000);
};

// for (var i = 0; i < answers.length; i++) {
//   if ($('input[name="radio"]:checked').val() == answers) {
//     right++;
//   } else {
//     wrong++;
//   }
//console.log(correct);
//console.log(incorrect);
// }

function collectResults() {
  var Q1 = $('input:radio[name="q1"]:checked').val();
  var Q2 = $('input:radio[name="q2"]:checked').val();
  var Q3 = $('input:radio[name="q3"]:checked').val();
  var Q4 = $('input:radio[name="q4"]:checked').val();
  var Q5 = $('input:radio[name="q5"]:checked').val();
  var Q6 = $('input:radio[name="q6"]:checked').val();
  var Q7 = $('input:radio[name="q7"]:checked').val();
  var Q8 = $('input:radio[name="q8"]:checked').val();
  var Q9 = $('input:radio[name="q9"]:checked').val();
  var Q10 = $('input:radio[name="q10"]:checked').val();

  for (var i = 0; i < answers.length; i++) {
    if (Q1 == undefined) {
      unanswered++;
    } else if (Q1 == "George Washington") {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (Q2 == undefined) {
      unanswered++;
    } else if (Q2 == "1789 ") {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (Q3 == undefined) {
      unanswered++;
    } else if (Q3 == "Fifty states of the United States") {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (Q4 == undefined) {
      unanswered++;
    } else if (Q4 == "Edsel") {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (Q5 == undefined) {
      unanswered++;
    } else if (Q5 == "Thomas Edison") {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (Q6 == undefined) {
      unanswered++;
    } else if (Q6 == "Christopher Columbus") {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (Q7 == undefined) {
      unanswered++;
    } else if (Q7 == "1850") {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (Q8 == undefined) {
      unanswered++;
    } else if (Q8 == "Michael Jackson") {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (Q9 == undefined) {
      unanswered++;
    } else if (Q9 == "New York") {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    if (Q10 == undefined) {
      unanswered++;
    } else if (Q10 == "France") {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }

    // function printOnTheScreen() {
    //   document.getElementById("right").innerHTML =
    //     "Right Answers: " + rightAnswers;
    //   document.getElementById("wrong").innerHTML =
    //     "Wrong Answers: " + wrongAnswers;
    //   document.getElementById("una").innerHTML = "Unanswered: " + unanswered;
    // }

    $("#right").html(rightAnswers);
    $("#wrong").html(wrongAnswers);
    $("#unanswered").html(unanswered);
    $(".results").show();
  }
}

// $(".results").html("<h4>Right Answers: " + rightAnswers + "</h4>");
// $(".results").append("<h4>Wrong Answers: " + wrongAnswers + "</h4>");
