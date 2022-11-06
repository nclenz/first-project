import $ from "jquery";

const app = {
    words: ["albertosaurus", "allosaurus", "tyrannosaur", "Sauropods", "achelousaurus"],
    page: "startPage",
    randomWord: "",
    userInput: "",
    result: 0,
    mistake: 0,
}

const renderPage = () => {

    $(".page").hide();
    $(`#${app.page}`).show();
};
renderPage();


// //Produce random word from words array
const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * app.words.length);
    app.randomWord = app.words[randomIndex];
    $("#randomWord").text(app.randomWord)
}


const startButton = () => {
    $("#startButton").on("click", () => {
        app.page = "gamePage"
        getRandomWord();
        console.log(app.page);
        renderPage();
        game();
    })
}
startButton()




//--------------------Get and set result------------------------------->

//Comparing user input and randomword. If true, result++
const getUserInput = () => $("#user-input").val()


const getResult = () => {
    if (getUserInput() === app.randomWord) {
        app.result++;
        $("#result").text(`Correct: ${app.result}`)

    }
    else {
        app.mistake++;
        $("#mistake").text(`Mistake: ${app.mistake}`)

    }

}


//---------------setting Enter Key---------------------------------

const game = () => {
    $("#user-input").on("keypress", (event) => {
        if (event.key === 'Enter') {
            getResult()
            getRandomWord()
            emptyUserInput();
        }
    }
    )
};


const emptyUserInput = () => $("#user-input").val('');

const exitButton = () => {
    $("#exitButton").on("click", () => {
        app.page = "scorePage";
        renderPage();

    })
}
exitButton();

const restartButton = () => {
    $("#restartButton").on("click", () => {
        app.page = "gamePage";
        renderPage();

    })
}
restartButton();



//------------------render ------------------------------
// const render = () => {
//     renderPage();
//     setupMovementButtonHandlers();
//     game();
// };

// const setupMovementButtonHandlers = () => {
//     $("#startButton").on("click", () => {
//         app.page = "gamePage";
//         render();
//         console.log(app.page)
//     });
//     // $("#gameButton").on("click", () => {
//     //     app.page = "scorePage";
//     //     render();
//     // });

// };
