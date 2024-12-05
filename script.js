// script.js
function checkAnswer(questionId, correctAnswer) {
    const feedback = document.getElementById(`feedback-${questionId}`);
    let userAnswer;

    if (document.querySelector(`input[name="${questionId}"]`)) {
        const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
        userAnswer = selectedOption ? selectedOption.value : null;
    } else {
        userAnswer = document.getElementById(questionId).value.trim().toLowerCase();
    }

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Try again.";
        feedback.style.color = "red";
    }
}
