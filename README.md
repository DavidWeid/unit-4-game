# unit-4-game

The player can click the "Instructions" button for how the game works. Instructions are shown in a modal and the player can click the "Let's Go!" button or click outside the modal to exit the instructions.

When the game loads up, the player will see 4 emeralds on the screen and a "Target number" with some random value.

"Wins", "Losses", and "Total score" will be blank at the start.

When the player clicks on an emerald, their score will increase by a random amount between 1 and 12 (1 exclusive, 12 inclusive). Each emerald has a random value assigned to it and each will increase the "Total score" by their individual random number.

If the player's "Total score" matches the "Target number", their "Wins" goes up by 1. If the player's "Total score" goes greater than the "Target number", their "Losses" goes up by 1. In either case, the "Target number" will reset to a new number, their new "Wins" or "Losses" will display, their "Total score" will be blank, and the values assigned to each emerald will re-randomize.

The background will also change depending on a win or loss. The opacity of the emeralds will decrease < 1 (on a loss). Lastly, when the player clicks an emerald to start the new round, the background will reset to default and the emeralds' opacity will return to 1 (if from a loss).
