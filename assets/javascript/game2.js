// Create word bank - 
    //var word = "string1"
var dogSays = "arf";
var catSays = "meow";
    //var wordBank = [string1, string 2, etc.]
var wordBank = [dogSays,catSays];
// Generate selectedWord - 
    // Generate random number via var randomIndex = Math.Floor(wordBank.length*randomnumber generation);
    // var selecetedWord = wordBank[randomIndex];
var selectedWord = wordBank[Math.floor((Math.random()*wordBank.length))];
console.log(selectedWord);
//  Display selectedWord as dashes in html
var guessedLetters = [];
var dashedArray = [];
for (var i = 0; i< selectedWord.length; i++){
    dashedArray[i]="_ ";
}
console.log(dashedArray);
document.querySelector(".selected").innerHTML = `
<h1> ${dashedArray.join(" ")} </h1>
`;
turns = 10;
// Listen for user key event
document.onkeyup = function(event) {
        var usersGuess = event.key;
        //save to varible userKey = keyevent
    console.log(usersGuess);
        //Setting up count - 
        //check if key is in selectedWord - selectedWord.includes(userKey)
        //if True
        for (var i = 0; i < 1; i++ ) {
            if (selectedWord.includes(usersGuess) === true && turns > 1 && dashedArray.includes("_ ") === true && guessedLetters.includes(usersGuess)=== false) {
                console.log("MATCHHHHHH!");
                //update dashedArray
                // find index of matched letter
                var matchedIndex = selectedWord.indexOf(usersGuess);
                console.log("the matched index is " + matchedIndex)
                dashedArray[matchedIndex] =usersGuess;
                console.log(dashedArray);
                document.querySelector(".selected").innerHTML = `
                <h1> ${dashedArray.join(" ")} </h1>
                `;
                //subtract 1 guess Update display
                document.querySelector(".count").innerHTML = `
                <h1> Turns Left: ${turns} </h1>
                `;
                //play victory sound
                //check for word completion
                if (dashedArray.includes("_ ") === false && turns > 0) {
                    console.log("winner winner chicken dinner");
                }
            } else if (selectedWord.includes(usersGuess) === false && turns > 1 && dashedArray.includes("_ ") === true && guessedLetters.includes(usersGuess)=== false) {   // if false
                // add letter to guessed list
                guessedLetters.push(usersGuess);
                document.querySelector(".guessed").innerHTML = `
                <h1> ${guessedLetters} </h1>
                `;
                // subtract 1 from guess count
                turns--
                console.log(turns);
                document.querySelector(".count").innerHTML = `
                <h1> Turns Left: ${turns} </h1>
                `;
                //update hangman image
                //play loser sound
                console.log("key is false");
            } else if (guessedLetters.includes(usersGuess)=== true) {
                console.log("Already Guessed!!!!")
            } else { 
                console.log("Game Over");
            }
        };
};


