// Nooooooo //
// 改変や複製を一切禁止します。 //
// https://github.com/Nooooooo-0328/Quiz-site //

// 答え見ちゃだめ！！

const quizData = [
    {
        question: "1 + 1は？",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        feedback: "正解です！"
    },
    {
        question: "首都は東京ですか？",
        options: ["はい", "いいえ"],
        correctAnswer: "はい",
        feedback: "正解です！"
    },
    {
        question: "HTMLは何の略ですか？",
        options: ["HyperText Markup Language", "HighlyText Markup Language", "HyperText Makeup Language", "HyperTransfer Markup Language"],
        correctAnswer: "HyperText Markup Language",
        feedback: "正解です！"
    },
    {
        question: "CSSは何の略ですか？",
        options: ["Counter Strike: Source", "Computer Style Sheets", "Creative Style System", "Cascading Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
        feedback: "正解です！"
    },
    {
        question: "JavaScriptの略は？",
        options: ["Java Source", "JavaSlang", "JavaScript", "JavaStyle"],
        correctAnswer: "JavaScript",
        feedback: "正解です！"
    },
    {
        question: "WWWの略は？",
        options: ["World Wide Web", "Wide World Web", "Web World Wide", "Wired Web World"],
        correctAnswer: "World Wide Web",
        feedback: "正解です！"
    },
    {
        question: "コンピュータの基本的な情報を記憶しておく装置は？",
        options: ["RAM", "ROM", "CPU", "GPU"],
        correctAnswer: "RAM",
        feedback: "正解です！"
    },
    {
        question: "最も使われているプログラミング言語は？",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: "JavaScript",
        feedback: "正解です！"
    },
    {
        question: "Appleの創業年はいつでしょう？",
        options: ["1974", "1986", "1998", "1976"],
        correctAnswer: "1976",
        feedback: "正解です！"
    },
    {
        question: "Appleの創業者は誰でしょう？",
        options: ["Bill Gates", "Elon Musk", "Steve Jobs", "Mark Zuckerberg"],
        correctAnswer: "Steve Jobs",
        feedback: "正解です！"
    },
    {
        question: "Noooooooが一番使うプログラミング言語は？",
        options: ["Python", "JavaScript", "html", "css"],
        correctAnswer: "Python",
        feedback: "正解です！"
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let selectedOptions = [];
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
  
    questionElement.textContent = quizData[currentQuestion].question;
  
    optionsContainer.innerHTML = "";
    for (let i = 0; i < quizData[currentQuestion].options.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.textContent = quizData[currentQuestion].options[i];
        optionButton.setAttribute("onclick", `selectOption('${quizData[currentQuestion].options[i]}')`);
        optionsContainer.appendChild(optionButton);
    }
  }
  
  function selectOption(selectedOption) {
    selectedOptions[currentQuestion] = selectedOption;
  
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
        score++;
    }
  
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        endQuiz();
    }
  }
  
  function endQuiz() {
    const scoreTextElement = document.getElementById("score-text");
    const correctAnswersList = document.getElementById("correct-answers-list");
    const correctAnswersElement = document.getElementById("correct-answers");
    const finalScoreContainer = document.getElementById("final-score");

    scoreTextElement.textContent = `あなたのスコアは ${score} / ${quizData.length} です。`;

    let correctAnswersHTML = "";
    quizData.forEach((question, index) => {
        if (index !== 10) {
            correctAnswersHTML += `<li>${question.question}: ${question.correctAnswer}  |  あなたの回答: ${selectedOptions[index] || '未回答'}</li>`;
        }
    });

    correctAnswersList.innerHTML = correctAnswersHTML;
    correctAnswersElement.style.display = "block";
    finalScoreContainer.style.display = "block";

    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    questionElement.style.display = "none";
    optionsContainer.style.display = "none";
}

  
  function tweetResult() {
    const scoreText = document.getElementById("score-text").textContent;
    const correctAnswersElement = document.getElementById("correct-answers");
  
    let correctAnswersHTML = "<p>正しい答え:</p><ul>";
    quizData.forEach((question, index) => {
        correctAnswersHTML += `<li>${question.question}: ${question.correctAnswer}  |  あなたの回答: ${selectedOptions[index] || '未回答'}</li>`;
    });
    correctAnswersHTML += "</ul>";
  
    const tweetText = `@Nooooooo_0328\n私のクイズのスコアは、${score} / ${quizData.length}でした。あなたもプレイしましょう！\nhttps://nooooooo-0328.github.io/Quiz-site/`;
  
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    
    window.open(tweetURL, '_blank');
  }
  
  loadQuestion();
  