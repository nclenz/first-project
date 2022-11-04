import $ from "jquery";

const app = {
    words: ['velociraptor', 'brachiosaurus', 'tyrannosaurus'],
    result: 0,
    page: "game",
    userInput: "",
    randomWord: "",

}

const renderPage = () => {
    $(".page").hide();
    $(`#${app.page}Page`).show();
};




const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * app.words.length);
    const $randomWord = $("<div>").attr("id", "random-word")
    $("#display").append($randomWord).text(app.words[randomIndex]);
    app.randomWord = app.words[randomIndex];

}
getRandomWord();


const getUserInput = () => {
    app.words.userInput = $("#user-input").val();
    // console.log(app.words.userInput)
}


const getResult = () => {

    if (app.words.userInput === app.randomWord) {
        app.result++;
    }
    // const $results = $("<div>").attr("id", "results").text(app.result)
    // $("#gamePage").append($results);
    console.log(app.result);

}



const render = () => {
    $("#submitButton").on("click", (event) => {
        event.preventDefault();
        getResult();
        getRandomWord()
        getUserInput();
    });
}

const score = () => {
    const $score = $("<div>").attr("id", "score").text(app.result)
    $("#scorePage").append($score);
};



score();


const main = () => {
    render();
    renderPage();

}
main();
