document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos con la clase "question" y los almacena en la variable "questions".
    const questions = document.querySelectorAll(".question");

    // Itera sobre cada pregunta.
    questions.forEach(function(question) {
        // Encuentra el elemento de título dentro de la pregunta actual.
        const title = question.querySelector(".question-title");

        // Añade un event listener para el clic en el título.
        title.addEventListener("click", function() {
            // Encuentra el elemento de respuesta dentro de la misma pregunta.
            const answer = question.querySelector(".answer");
            
            // Comprueba si la respuesta está actualmente visible.
            const isOpen = answer.style.display === "block";

            // Si la respuesta está abierta, la oculta. De lo contrario, la muestra.
            if (isOpen) {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
