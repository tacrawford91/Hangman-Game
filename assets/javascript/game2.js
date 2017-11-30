// Create word bank - 
    //var word = "string1"
var dogSays = "woof";
var catSays = "meow";
    //var wordBank = [string1, string 2, etc.]
var wordBank = [dogSays,catSays];
// Generate selectedWord - 
    // Generate random number via var randomIndex = Math.Floor(wordBank.length*randomnumber generation);
    // var selecetedWord = wordBank[randomIndex];
var selectedWord = wordBank[Math.floor((Math.random()*wordBank.length))];
console.log(selectedWord);
//  Display selectedWord as dashes in html
var dashedArray = [];
for (var i = 0; i< selectedWord.length; i++){
    dashedArray[i]="_ ";
}
console.log(dashedArray);
document.querySelector(".selected").innerHTML = `
<h1> ${dashedArray.join(" ")} </h1>
`;

// Listen for user key event
document.onkeyup = function(event) {
    var usersGuess = event.key;
    //save to varible userKey = keyevent
    console.log(usersGuess);
    //check if key is in selectedWord - selectedWord.includes(userKey)
    //if True
    if (selectedWord.includes(usersGuess) === true) {
        console.log("MATCHHHHHH!");
    //subtract 1 guess Update display
    count--
    console.log("count is" + count);
    document.querySelector(".count").innerHTML = `
    <h1> Turns Left: ${count} </h1>
    `;
    //play victory sound
    //check for word completion
    } else {   // if false
            // subtract 1 from guess count
    // add letter to guessed list
    //update hangman image
    //play loser sound
    console.log("key is false");
    count--
    console.log("count is" + count);
    document.querySelector(".count").innerHTML = `
    <h1> Turns Left: ${count} </h1>
    `;
    }
};
//check if key is in selectedWord - selectedWord.includes(userKey)


