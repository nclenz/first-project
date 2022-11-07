import $ from "jquery";

const app = {
    words: ["albertosaurus", "allosaurus", "tyrannosaur", "Sauropods", "achelousaurus"],
    page: "startPage",
    randomWord: "",
    userInput: "",
    result: 0,
    mistake: 0,
}



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


const startButton = () => {
    $("#startButton").on("click", () => {
        setTimer();
        app.page = "gamePage"
        getRandomWord();
        renderPage();
        game();
    })
}
startButton()


const exitButton = () => {
    $("#exitButton").on("click", () => {
        app.page = "scorePage";
        renderPage();

    })
}
exitButton();


const restartButton = () => {
    $("#restartButton").on("click", () => {
        app.page = "startPage";
        renderPage();

    })
}
restartButton();




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
const emptyUserInput = () => $("#user-input").val('');

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


//https://stackoverflow.com/questions/41035992/jquery-countdown-timer-for-minutes-and-seconds
const setTimer = () => {
    let timer2 = "0:05";
    let interval = setInterval(function () {
        let timer = timer2.split(':');
        //by parsing integer, I avoid all extra string processing
        let minutes = parseInt(timer[0], 10);
        let seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        //minutes = (minutes < 10) ?  minutes : minutes;
        $('.countdown').html(minutes + ':' + seconds);
        timer2 = minutes + ':' + seconds;
        if (minutes < 0) {
            app.page = "scorePage";
            const highestTimeoutId = window.setTimeout(() => {
                for (let i = highestTimeoutId; i >= 0; i--) {
                    window.clearInterval(i);
                }
            }, 0)
        }
        renderPage();
    }, 1000);


}

