import $ from "jquery";

const app = {
    words: "",
    page: "startPage",
    randomWord: "",
    userInput: "",
    correct: 0,
    mistake: 0,
    timer: 0,
}

let myTimer = "";
let easyWord = ['zebra', 'horse', 'cat', 'dog', 'panda', 'tiger', 'lion', 'bird', 'snake', 'goat', 'donkey', 'shark', 'camel', 'hamster', 'spider',
    'sheep', 'turtle', 'frog', 'leopard', 'cheetah', 'whale', 'mouse', 'fish', 'octopus', 'duck', 'goose', 'bear', 'seal', 'deer', 'pig', 'cow', 'lizard'];
let mediumWord = ['german shepherd', 'bulldog', 'siberian husky', 'alaskan malamute', 'great dane', 'yorkshire terrier', 'rottweiler', 'pomeranian', 'havanese', 'shih tzu',
    'labradoodle', 'labrador retriever', 'norwegian buhund', 'neapolitan mastiff', 'patterdale terrier', 'rhodesian ridgeback', 'deutscher wachtelhund', 'dogo argentino',
    'drentsche patrijshond', 'finnish lapphund'];
let hardWord = ["albertosaurus", "allosaurus", "tyrannosaur", "sauropods", " pseudopseudohypoparathyroidism", 'pneumonoultramicroscopicsilicovolcanoconiosis', 'floccinaucinihilipilification', 'antidisestablishmentarianism',
    'supercalifragilisticexpialidocious', 'incomprehensibilities', 'honorificabilitudinitatibus', 'Sesquipedalianism', 'otorhinolaryngological', 'dermatoglyphics', 'micropachycephalosaurus', 'carcharodontosaurus', 'eustreptospondylus', 'pachycephalosaurus',
    'archaeornithomimus'];




//--------------------Produce random word from words array---------------------
const getRandomWord = () => {
    if ($("select").val() === "easyMode") {
        app.words = easyWord;
    }
    if ($("select").val() === "mediumMode") {
        app.words = mediumWord;
    }
    if ($("select").val() === "hardMode") {
        app.words = hardWord;
    }
    const randomIndex = Math.floor(Math.random() * easyWord.length);
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
const restartButton = () => {
    $("#restartButton").on("click", () => {
        app.page = "startPage";
        renderPage();
        app.correct = 0;
        app.mistake = 0;
        $("#mistake").text(`Mistake: ${app.mistake}`)
        $("#result").text(`Correct: ${app.correct}`)
    })
}
restartButton();

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
    app.timer = 30;
    $("#timer").text(`Time left:  ${app.timer}`);
    myTimer = setInterval(function () {
        $("#timer").text(`Time left:  ${app.timer}`);
        if (app.timer === 0) {
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


