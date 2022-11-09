import $ from "jquery";

const app = {
    words: ["albertosaurus", "allosaurus", "tyrannosaur", "Sauropods", "achelousaurus"],
    page: "startPage",
    randomWord: "",
    userInput: "",
    correct: 0,
    mistake: 0,
    timer: 0,
}

let myTimer = ""

//--------------------Produce random word from words array---------------------
const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * app.words.length);
    app.randomWord = app.words[randomIndex];
    $("#randomWord").text(app.randomWord)
}


//-------------------- buttons that render to different pages-------------------
const renderPage = () => {

    $(".page").hide();
    $(`#${app.page}`).show();
};
renderPage();

//---------------------------------------------------
// const startButton = () => {

// }
// startButton()

$("#startButton").on("click", () => {
    countDown();
    emptyUserInput();
    app.page = "gamePage";
    getRandomWord();
    renderPage();
})

//------------------------------------------------------

$("#exitButton").on("click", () => {
    app.page = "scorePage";
    renderPage();
    clearInterval(myTimer)
    $("#displayScore").text(`Correct: ${app.correct} Mistake: ${app.mistake}`)
})


//----------------------------------------------------

$("#restartButton").on("click", () => {
    app.page = "startPage";
    renderPage();
    app.correct = 0;
    app.mistake = 0;
    $("#mistake").text(`Mistake: ${app.mistake}`)
    $("#result").text(`Correct: ${app.correct}`)
})






//--------------------Get and set result------------------------------->

//Comparing user input and randomword. If true, result++
const getUserInput = () => $("#user-input").val()

//------------------------------------------------------
const getResult = () => {
    if (getUserInput() === app.randomWord) {
        app.correct++;
        $("#result").text(`Correct: ${app.correct}`)

    }
    else {
        app.mistake++;
        $("#mistake").text(`Mistake: ${app.mistake}`)

    }

}


//---------------setting Enter Key---------------------------------
const emptyUserInput = () => $("#user-input").val('');

//--------------------------------------------------
const game = () => {
    $("#user-input").on("keypress", (event) => {
        if (event.key === 'Enter') {
            getResult();
            getRandomWord();
            emptyUserInput();
        }
    }
    )
};
game();


function countDown() {
    app.timer = 10;
    $("#timer").text(`Time left:  ${app.timer}`);
    myTimer = setInterval(function () {
        $("#timer").text(`Time left:  ${app.timer}`);
        if (app.timer === 0) {
            //clearInterval(myinterval);

            clearInterval(myTimer)
            $("#displayScore").text(`Correct: ${app.correct} Mistake: ${app.mistake}`)
            app.page = "scorePage";
            renderPage();
        }
        else {
            app.timer--;
        }
    }, 1000)
}

$(".scorePage").append$("#displayScore").text(`Correct: ${app.correct} Mistake: ${app.mistake}`)


