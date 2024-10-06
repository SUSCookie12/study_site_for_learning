// Basic script to handle any future interactions or dynamic content
document.addEventListener("DOMContentLoaded", function() {
    // You can add future functionality here
});

function checkAnswers() {
    const feedback = document.getElementById('feedback');
    const exercise1Answer = document.getElementById('exercise1').value.trim().toLowerCase();
    const exercise2Answer = document.getElementById('exercise2').value.trim().toLowerCase();
    
    let correctAnswers = 0;
    let totalAnswers = 2; // Total number of exercises

    // Check the first exercise
    if (exercise1Answer === 'клокотница') {
        correctAnswers++;
    }

    // Check the second exercise (example question; adjust as needed)
    if (exercise2Answer === 'иван асен ii') {
        correctAnswers++;
    }

    // Provide feedback
    if (correctAnswers === totalAnswers) {
        feedback.textContent = 'Чудесно! Всички отговори са правилни!';
    } else {
        feedback.textContent = `Неправилни отговори. Правилни отговори: Клокотница и Иван Асен II.`;
    }
}

function completeLesson(lesson) {
    alert(lesson + ' е завършен!');
}

function startTest(lessonNumber) {
    document.getElementById('test' + lessonNumber).style.display = 'block';
}

function submitTest(lessonNumber) {
    // Проверка на теста
    let feedback = document.getElementById('test-feedback' + lessonNumber);
    feedback.innerHTML = 'Вашият тест е проверен!'; // Тук ще добавите логика за проверка на отговорите.
}
