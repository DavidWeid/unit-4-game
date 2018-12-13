///// VARIABLES /////

// Hold start target number and user's current score
var targetNumber = Math.floor(Math.random() * (+121 - +19)) + +19;
var currentScore = 0;

// Wins and losses start at zero
var wins = 0;
var losses = 0;

// Variable functions to hold the random numbers
var randomTarget = function () {
    targetNumber = Math.floor(Math.random() * (+121 - +19)) + +19;
};

var randomEmeraldValue = function () {
    return Math.floor(Math.random() * (+13 - 2)) + +2;
};

var randoms = Array(4).fill(0).map(randomEmeraldValue);

var emeraldImg = $("<img src='assets/images/blue-emerald.png' />");
emeraldImg.addClass("emerald-img");
emeraldImg.attr("data-emeraldValue", randoms[0]);
$("#emeralds").append(emeraldImg);

var emeraldImg2 = $("<img src='assets/images/green-emerald.png' />");
emeraldImg2.addClass("emerald-img");
emeraldImg2.attr("data-emeraldValue", randoms[1]);
$("#emeralds").append(emeraldImg2);

var emeraldImg3 = $("<img src='assets/images/red-emerald.png' />");
emeraldImg3.addClass("emerald-img");
emeraldImg3.attr("data-emeraldValue", randoms[2]);
$("#emeralds").append(emeraldImg3);

var emeraldImg4 = $("<img src='assets/images/white-emerald.png' />");
emeraldImg4.addClass("emerald-img");
emeraldImg4.attr("data-emeraldValue", randoms[3]);
$("#emeralds").append(emeraldImg4);

// Display the initial random target number
$("#target-number").html(targetNumber);

///// FUNCTIONS /////

// Function runs when user wins OR loses the game
function resetGame() {

    randomTarget();
    $("#target-number").html(targetNumber);
    emeraldValueReset();
    currentScore = 0;
    $("#current-score").html("");
    updateWinLoss();

}

// Reset data values on emeralds
function emeraldValueReset() {

    randomEmeraldValue = function () {
        return Math.floor(Math.random() * (+13 - 2)) + +2;
    };

    randoms = Array(4).fill(0).map(randomEmeraldValue);

    emeraldImg.attr("data-emeraldValue", randoms[0]);

    emeraldImg2.attr("data-emeraldValue", randoms[1]);

    emeraldImg3.attr("data-emeraldValue", randoms[2]);

    emeraldImg4.attr("data-emeraldValue", randoms[3]);

}

// Update Wins and Losses displayed
function updateWinLoss() {

    $("#wins").html(wins);
    $("#losses").html(losses);

}


/// The Clicking Part of the Game ///


// On-click event for each crystal
$(".emerald-img").on("click", function () {

    var emeraldValue = ($(this).attr("data-emeraldValue"));
    emeraldValue = parseInt(emeraldValue);

    currentScore += emeraldValue;

    $("#current-score").html(currentScore);

    if (currentScore === targetNumber) {

        wins++;
        resetGame();

    } else if (currentScore >= targetNumber) {

        losses++;
        resetGame();

    }

})