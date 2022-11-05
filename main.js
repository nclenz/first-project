import $ from "jquery";

const app = {
    words: ['velociraptor', 'brachiosaurus', 'tyrannosaurus'],
    result: 0,
    page: "game",
    userInput: "",
    randomWord: "",
}

// //Produce random word from words array
const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * app.words.length);
    app.randomWord = app.words[randomIndex];
    $("#randomWord").text(app.randomWord)
}


const startButton = () => {
    $("#startButton").on("click", () => {
        getRandomWord();
    })
}
startButton();


//--------------------Get and set result------------------------------->

//Getting user input
const getUserInput = () => {
    app.userInput = $("#user-input").val();
    return app.userInput;
}

//Comparing user input and randomword. If true, result++
const getResult = () => {
    if (getUserInput() === app.randomWord) {
        app.result++
        $("#result").text(app.result)
    }
}

//---------------setting button and Enter Key---------------------------------
$("#submitButton").on("click", () => {
    getResult()
    getRandomWord()
})



$("#user-input").on("keypress", (event) => {
    if (event.key === 'Enter') {
        getResult()
        getRandomWord()
    }
    emptyUserInput();
}
);


const emptyUserInput = () => {
    $("#user-input").val(' ');
}
// const enterButton = () => {
//     $("#user-input").on("keypress", (event) => {
//         if (event.key === 'Enter') {
//             submitButton();
//         }
//     })
// }

// enterButton();


// const getUserInput = () => {
//     $("#user-input").on("keypress", (event) => {
//         app.userInput = $("#user-input").val();
//         if (event.key === 'Enter') {
//             console.log(app.userInput)
//             getRandomWord()
//         }
//     })
// }
// getUserInput();



// const getUserInput = () => {
//     app.words.userInput = $("#user-input").val();
//     $("#user-input").on("keypress", (event) => {
//         if (event.key === 'Enter') {
//             console.log('Enter')
//         }
//     })
// };
// getUserInput();




// const getResult = () => {
//     if (app.words.userInput === app.randomWord) {
//         app.result++;
//     }
//     // const $results = $("<div>").attr("id", "results").text(app.result)
//     // $("#gamePage").append($results);
//     console.log(app.result);
// }


// const render = () => {
//     $("#submitButton").on("click", () => {
//         getResult();
//         getUserInput();
//         getRandomWord()
//         $("output").text(app.result);

//     });
// }

// // const renderPage = () => {
// //     $(".page").hide();
// //     $(`#${app.page}Page`).show();
// // };

// // const scorePage = () => {
// //     const $score = $("<div>").attr("id", "score").text(app.result)
// //     $("#scorePage").append($score);
// // }
// // scorePage();


// const main = () => {
//     render();
//     // renderPage();
// }
// main();
