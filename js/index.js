// Disable inspect element
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    if (e.which === 123) {
        e.preventDefault();
    }
});


// Array de perguntas e respostas
const questions = [
    { question: 'Qual é a capital do Brasil?', options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'], answer: 'Brasília' },
    { question: 'Qual é o símbolo químico para o ouro?', options: ['O', 'Au', 'Ag', 'Fe'], answer: 'Au' },
    { question: 'Quem escreveu "Dom Quixote"?', options: ['Miguel de Cervantes', 'William Shakespeare', 'Friedrich Nietzsche', 'Charles Dickens'], answer: 'Miguel de Cervantes' },
    { question: 'Qual é o maior planeta do sistema solar?', options: ['Vênus', 'Júpiter', 'Saturno', 'Marte'], answer: 'Júpiter' }
];

let currentQuestionIndex = -1;

function startQuiz() {
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('btn-start-quiz').style.display = 'none';
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').textContent = currentQuestion.question;

        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option, currentQuestion.answer);
        optionsContainer.appendChild(button);
        });
    } else {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('quiz-senha').style.display = 'block';
        askPassword();
    }
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        nextQuestion();
    } else {
        alert('Resposta incorreta. Tente novamente!');
    }
}

var clicks = 1;

function passwordTrys() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

function askPassword() {
    const password = prompt('Por favor, insira a senha de 6 dígitos:');
    if (password === '170424') {
        showCongratulations();
    } else {
        alert('Senha incorreta. Tente novamente!');
    }
    
}

function showCongratulations() {
    document.getElementById('quiz-topo').style.display = 'none';
    document.getElementById('quiz-senha').style.display = 'none';
    document.getElementById('congratulations').style.display = 'block';
}