

const questions = [
    {
        question: "តើពាក្យ Hyper Text Markup Language មានពាក្យកាត់អ្វី?",
        optionA: "XTML",
        optionB: "HTML",
        optionC: "HTTML",
        optionD: "HPTML",
        correctOption: "optionB"
    },

    {
        question: "តើអ្នកណាជាអ្នកបង្កើតនូវ​ Web standards ?",
        optionA: "Google",
        optionB: "The World Wide Web Consortium",
        optionC: "Microsoft",
        optionD: "Mozila",
        correctOption: "optionB"
    },

    {
        question: "សូមជ្រើសរើសនូវធាតុ HTML ដែលប្រើសម្រាប់ធ្វើឲចំណងជើងមានទំហំធំជាងគេ ?",
        optionA: "&lt;heading&gt;",
        optionB: "&lt;h6&gt;",
        optionC: "&lt;head&gt;",
        optionD: "&lt;h1&gt;",
        correctOption: "optionD"
    },

    {
        question: "តើធាតុ HTML ដែលប្រើសម្រាប់ចុះដើមបន្ទត់ ?",
        optionA: "&lt;break&gt;",
        optionB: "&lt;lb&gt;",
        optionC: "&lt;br&gt;",
        optionD: "&lt;brk&gt;",
        correctOption: "optionC"
    },

    {
        question: "តើធាតុ HTML មួយណាដែលប្រើសម្រាប់ដាក់ background color ?",
        optionA: '&lt;background&gt;yellow&lt;/background&gt;',
        optionB: '&lt;body bg="yellow"&gt;',
        optionC: '&lt;background-color ="yellow"&gt; &lt;/background-color&gt;',
        optionD: '&lt;body style="background-color:yellow;"&gt;',
        correctOption: "optionD"
    },

    {
        question: "តើធាតុ HTML មួយណាដែលប្រើសម្រាប់បង្កើតនូវ ប៉ូតុងគ្រីស ឬ checkbox ?",
        optionA: '&lt;input type="checkbox"&gt;',
        optionB: "&lt;check&gt;",
        optionC: "&lt;checkbox&gt;",
        optionD: '&lt;input type="check"&gt;',
        correctOption: "optionA"
    },

    {
        question: "សូមជ្រើសរើសនូវធាតុ HTML ដែលត្រឹមត្រូវនៅក្នុងការបញ្ជាក់នូវ important text ?",
        optionA: "&lt;i&gt;",
        optionB: "&lt;important&gt;",
        optionC: "&lt;strong&gt;",
        optionD: "&lt;b&gt;",
        correctOption: "optionC"
    },

    {
        question: "សូមជ្រើសរើសនូវធាតុ HTML ដែលត្រឹមត្រូវនិងបញ្ជាក់នូវ emphasized text ?",
        optionA: "&lt;em&gt;",
        optionB: "&lt;i&gt;",
        optionC: "&lt;italic&gt;",
        optionD: "&lt;iem&gt;",
        correctOption: "optionA"
    },

    {
        question: "តើធាតុ HTMl មួយណាដែលប្រើសម្រាប់បង្កើតនូវ link ?",
        optionA: "&lt;a&gt; http://www.youtube.com &lt;/a&gt;",
        optionB: '&lt;a name="http://www.youtube.com" &gt; YouTube &lt;/a&gt;',
        optionC: '&lt;a url="http://www.youtube.com" &gt; YouTube &lt;/a&gt;',
        optionD: '&lt;a href="http://www.youtube.com" &gt; YouTube &lt;/a&gt;',
        correctOption: "optionD"
    },

    {
        question: "តើនិមិត្តសញ្ញាអ្វីដែលប្រើសម្រាប់បញ្ជាក់នូវ (end tag ឬ បញ្ចប់ tag) ?",
        optionA: "*",
        optionB: "<",
        optionC: "^",
        optionD: "/",
        correctOption: "optionD"
    },

    {
        question: "តើអ្នកអាចបើកនូវ link ឲទៅកាន់ផ្ទាំថ្មី ឬ ហៅថា new tab នៃ browser window ?",
        optionA: '&lt;a new tab&gt;',
        optionB: '&lt;a href="url" target="new"&gt;',
        optionC: '&lt;a href="url" target="_blank"&gt;',
        optionD: '&lt;a href="url" new&gt;',
        correctOption: "optionC"
    },

    {
        question: "តើធាតុមួយណាខាងក្រោមត្រូវជាធាតុនៃ &lt;table&gt; ?",
        optionA: "&lt;table&gt; &lt;tr&gt; &lt;td&gt;",
        optionB: "&lt;table&gt; &lt;tr&gt; &lt;tt&gt;",
        optionC: "&lt;table&gt; &lt;tr&gt; &lt;tfoot&gt;",
        optionD: "&lt;thead&gt; &lt;body&gt; &lt;tr&gt;",
        correctOption: "optionA"
    },


    {
        question: "តើអ្នកអាចបង្កើតនូវ numbered list បានដោយប្រើ tag អ្វី ?",
        optionA: "&lt;dl&gt;",
        optionB: "&lt;ol&gt;",
        optionC: "&lt;list&gt;",
        optionD: "&lt;ul&gt;",
        correctOption: "optionB"
    },

    {
        question: "តើអ្នកអាចបង្កើតនូវ bulleted list បានដោយប្រើ tag អ្វី ?",
        optionA: "&lt;dl&gt;",
        optionB: "&lt;list&gt;",
        optionC: "&lt;ol&gt;",
        optionD: "&lt;ul&gt;",
        correctOption: "optionD"
    },

    {
        question: "តើធាតុ HTML មួយណាដែលប្រើសម្រាប់បង្កើតនូវប្រអប់ ឬ ហៅថា text input ដែលសម្រាប់ឲអ្នកប្រើប្រាស់សរសេរបញ្ជូល ?",
        optionA: '&lt;input type="text"&gt;',
        optionB: "&lt;textfield&gt;",
        optionC: '&lt;textinput type="text"&gt;',
        optionD: '&lt;input type="textfield"&gt;',
        correctOption: "optionA"
    },

    {
        question: "តើ HTML ខាងក្រោមមួយណាដែលប្រើសម្រាប់បង្កើតនូវ drop-down list (ជាបញ្ជីដែលពេលចុចគឺមានតំម្លៃឲរើស) ?",
        optionA: '&lt;input type="list"&gt;',
        optionB: '&lt;input type="dropdown"&gt;',
        optionC: "&lt;select&gt;",
        optionD: "&lt;list&gt;",
        correctOption: "optionC"
    },

    {
        question: "តើ HTML ខាងក្រោមមួយណាដែលប្រើសម្រាប់បង្កើតនូវ text area (តំបន់ដែលអាចសរសេរបាន) ?",
        optionA: "&lt;textarea&gt;",
        optionB: '&lt;input type="textbox"&gt;',
        optionC: '&lt;input type="textarea"&gt;',
        optionD: "&lt;textbox&gt;",
        correctOption: "optionA"
    },

    {
        question: "តើ HTML ខាងក្រោមមួយណាដែលប្រើសម្រាប់ដាក់បញ្ជូល ឬ ប្រើជាមួយរូបភាព ?",
        optionA: '&lt;image src="image.gif" alt="MyImage"&gt;',
        optionB: '&lt;image src="image.gif" alt="MyImage"&gt;',
        optionC: '&lt;img src="image.gif" alt="MyImage"&gt;',
        optionD: '&lt;img herf="image.gif" alt="MyImage"&gt;',
        correctOption: "optionC"
    },

    {
        question: "តើ HTML ខាងក្រោមមួយណាដែលប្រើសម្រាប់ដាក់បញ្ជូល ឬ ប្រើរូបភាពមកធ្វើជា background image ?",
        optionA: '&lt;background img="background.gif"&gt;',
        optionB: '&lt;background style="background.gif"&gt;',
        optionC: '&lt;body bg="background.gif"&gt;',
        optionD: '&lt;body style="background-image:url(background.gif)"&gt;',
        correctOption: "optionD"
    },

    {
        question: "តើ &lt;iframe&gt; ត្រូវបានប្រើសម្រាប់ធ្វើការបង្ហាញនូវ web page ក្នុង web page ?",
        optionA: "ត្រូវ",
        optionB: "&lt;iframe&gt; មិនត្រូវបានប្រើបែបនិងទេ",
        optionC: "&lt;iframe&gt; គឺត្រូវបានប្រើដើម្បីបង្ហាញតែ web page មួយគត់",
        optionD: "ខុស",
        correctOption: "optionA"
    },

    {
        question: "តើ HTML comments ចាប់ផ្តើមដោយសញ្ញា &lt;!-- និងបញ្ចប់ដោយ --&gt; ?",
        optionA: "ខុស",
        optionB: "ចាប់ផ្តើមដោយសញ្ញា /* និងបញ្ចប់ដោយ */",
        optionC: "ចាប់ផ្តើមដោយសញ្ញា &lt;!-- និងបញ្ចប់ដោយ --!&gt;",
        optionD: "ត្រូវ",
        correctOption: "optionD"
    },

    {
        question: "តើធាតុ HTML មួយណាដែលបញ្ជាក់អំពីចំណងជើងនៃ document ?",
        optionA: "&lt;head&gt;",
        optionB: "&lt;title&gt;",
        optionC: "&lt;headtitle&gt;",
        optionD: "&lt;meta&gt;",
        correctOption: "optionB"
    },

    {
        question: "តើ HTML មួយណាដែលប្រើសម្រាប់បញ្ជាក់បន្ថែមនូវឈ្មោះរូបភាពនៅពេលដែលរូបភាពមិនត្រូវបានបង្ហាញ ?",
        optionA: "src",
        optionB: "alt",
        optionC: "title",
        optionD: "longdesc",
        correctOption: "optionB"
    },

    {
        question: "តើ doctype មួយណាដែលត្រឹមត្រូវនិងបញ្ជាក់ថាវាជា HTML5 ?",
        optionA: '&lt;!DOCTYPE HTML PUBLIC "http://www.w.org/TR/html"&gt;',
        optionB: "&lt;!DOCTYPE html5&gt;",
        optionC: "&lt;!DOCTYPE html&gt;",
        optionD: "&lt;!DOCTYPE HTML&gt;",
        correctOption: "optionC"
    },

    {
        question: "តើធាតុ HTML មួយណាដែលប្រើសម្រាប់បញ្ជាកថាជាផ្នែកជើងនៃ web page ?",
        optionA: "&lt;bottom&gt;",
        optionB: "&lt;bleow&gt;",
        optionC: "&lt;footer&gt;",
        optionD: "&lt;section&gt;",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "មិនល្អសោះ 😢 ខំព្យាយាមបន្ថែមទៀត 💪"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "ល្អគួរសម 😀, អ្នកធ្វើបានល្អហើយ ។"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "ពិតជាធ្វើបានល្អមែន ✨, ត្រូវរក្សាឲបានទៅមុខទៀត 🎉"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}


//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}