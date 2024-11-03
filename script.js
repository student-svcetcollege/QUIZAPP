const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Cas Style Sheet',
        'b': 'Cascading Style Sheet',
        'c': 'Hyper Text Markup Language',
        'd': 'None of the above',
        'correct': 'b'
    }
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

let queBox = document.getElementById('quebox');
let optionInputs = document.querySelectorAll('.optionss');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    resetOptions();
    const data = questions[index];
    queBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = questions[index];
    const ans = getSelectedAnswer();
    if (ans === undefined) {
        alert("Please select an answer before submitting!");
        return;
    }
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
};

const getSelectedAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const resetOptions = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
        <h3>Thank you for playing the quiz!</h3>
        <h2>${right} out of ${total} are correct.</h2>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
};

const restartQuiz = () => {
    index = 0;
    right = 0;
    wrong = 0;
    document.getElementById('box').innerHTML = `
        <div id="quebox"></div>
        <div class="row">
            <input type="radio" name="option" class="optionss" id="option1" value="a">
            <label for="option1"></label>
        </div>
        <div class="row">
            <input type="radio" name="option" class="optionss" id="option2" value="b">
            <label for="option2"></label>
        </div>
        <div class="row">
            <input type="radio" name="option" class="optionss" id="option3" value="c">
            <label for="option3"></label>
        </div>
        <div class="row">
            <input type="radio" name="option" class="optionss" id="option4" value="d">
            <label for="option4"></label>
        </div>
        <button class="btn" onclick="submitQuiz()">Submit</button>
    `;
    
    // Re-select option inputs and reload the first question
    queBox = document.getElementById('quebox');
    optionInputs = document.querySelectorAll('.optionss');
    loadQuestion();
};

// Start the quiz
loadQuestion();
