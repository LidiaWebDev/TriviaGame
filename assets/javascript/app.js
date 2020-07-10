(wrongAnswers = 0),
  (unanswered = 0),
  (timer = 30),
  (rightAnswers = 0),
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
    "France",
  ]);
$(".mainContainer").hide();
$(".results").hide();

$("#start").on("click", function (event) {
  event.preventDefault();
  $("#intro").hide();
  $(".mainContainer").show();
  startCounting();
});
var interv;
startCounting = function (sec) {
  var sec = timer;
  interv = setInterval(function (timer) {
    sec--;
    document.getElementById("timer").innerHTML = sec;
    if (sec === 0) {
      console.log("The time is up! let's see the results!");
      $(".mainContainer").hide();
      $(".results").show();
      collectResults();
    }
  }, 1000);
};

$("#complete").on("click", function (event) {
  event.preventDefault();
  $("#intro").hide();
  $(".mainContainer").hide();
  $(".results").show();
  console.log("The time is up! let's see the results!");
  collectResults();
  return;
});

$(".playAgain").on("click", function (event) {
  event.preventDefault();
  location.reload();
});

function collectResults() {
  clearInterval(interv);
  unanswered = 0;
  rightAnswers = 0;
  wrongAnswers = 0;
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

  $("#right").html(rightAnswers);
  $("#wrong").html(wrongAnswers);
  $("#unanswered").html(unanswered);
  $(".results").show();
}
