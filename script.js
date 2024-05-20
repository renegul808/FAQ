document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(function(question) {
        const title = question.querySelector(".question-title");

        title.addEventListener("click", function() {
            const answer = question.querySelector(".answer");
            const isOpen = answer.style.display === "block";

            if (isOpen) {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
