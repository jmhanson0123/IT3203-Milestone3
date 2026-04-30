// IT 3203 Milestone 2 - Quiz Script
// Author: Jordan Hanson
// Purpose: Grade the quiz and display results

// Wait for the form to be submitted
document.getElementById("quizForm").addEventListener("submit", function(event) {

  // Prevent page from refreshing on submit
  event.preventDefault();

  // Variable to track total score
  let score = 0;
  let feedback = "";

  // Question 1: Fill in the blank
  let q1Answer = document.getElementById("q1").value.toLowerCase().trim();

  if (q1Answer.includes("cern")) {
    score++;
  } else {
    feedback += "<p class='incorrect'>Q1 Incorrect (Answer: CERN)</p>";
  }

  // Question 2
  let q2Selected = document.querySelector('input[name="q2"]:checked');
  if (q2Selected && q2Selected.value === "Tim Berners-Lee") {
    score++;
  } else {
    feedback += "<p class='incorrect'>Q2 Incorrect (Answer: Tim Berners-Lee)</p>";
  }

  // Question 3
  let q3Selected = document.querySelector('input[name="q3"]:checked');
  if (q3Selected && q3Selected.value === "Nginx") {
    score++;
  } else {
    feedback += "<p class='incorrect'>Q3 Incorrect (Answer: Nginx)</p>";
  }

  // Question 4
  let q4Selected = document.querySelector('input[name="q4"]:checked');
  if (q4Selected && q4Selected.value === "Content Delivery Network") {
    score++;
  } else {
    feedback += "<p class='incorrect'>Q4 Incorrect (Answer: Content Delivery Network)</p>";
  }

  // Question 5
  let selectedAnswers = Array.from(
    document.querySelectorAll('input[name="q5"]:checked')
  ).map(option => option.value);

  let correctAnswers = [
    "Load Balancing",
    "Reverse Proxy",
    "Serving Web Apps"
  ];

  selectedAnswers.sort();
  correctAnswers.sort();

  if (JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers)) {
    score++;
  } else {
    feedback += "<p class='incorrect'>Q5 Incorrect (Answers: Load Balancing, Reverse Proxy, Serving Web Apps)</p>";
  }

  // Final result
  let totalQuestions = 5;
  let percentage = (score / totalQuestions) * 100;

  let resultText;
  if (percentage >= 70) {
    resultText = "<p style='color:green;'>PASS</p>";
  } else {
    resultText = "<p style='color:red;'>FAIL</p>";
  }

  document.getElementById("results").innerHTML =
    "<h2>Quiz Results</h2>" +
    "<p><strong>Score:</strong> " + score + " / " + totalQuestions + "</p>" +
    "<p><strong>Percentage:</strong> " + percentage.toFixed(0) + "%</p>" +
    resultText +
    feedback;

}); // THIS was missing

// Reset Button Functionality
document.querySelector('button[type="reset"]').addEventListener("click", function() {
  document.getElementById("results").innerHTML = "";
});