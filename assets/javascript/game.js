// Create word bank - 
//var word = "string1"  (REFACTOR THIS USING SPLIT & JOIN)
var dogSays = "arf";
var catSays = "meow";
//var wordBank = [string1, string 2, etc.]
var wordBank = [dogSays,catSays];
// Generate selectedWord - 
// Generate random number via var randomIndex = Math.Floor(wordBank.length*randomnumber generation);
// var selecetedWord = wordBank[randomIndex];
var selectedWord = wordBank[Math.floor((Math.random()*wordBank.length))];
console.log(selectedWord);
//  Create dashed array based on selectedWord 
var guessedLetters = [];
var dashedArray = [];
for (var i = 0; i< selectedWord.length; i++){
dashedArray[i]="_ ";
}
//  Display selectedWord as dashes in html
console.log(dashedArray);
document.querySelector(".selected").innerHTML = `
<h1> ${dashedArray.join(" ")} </h1>
`;
//Start Count and Display it
var count = 10;
document.querySelector(".count").innerHTML = `
<h1> Turns Left: ${count} </h1>
`
// Listen for user key event
document.onkeyup = function(event) {
        var usersGuess = event.key;
        //save to varible userKey = keyevent
        console.log(usersGuess);
        //Check user guess keystrokes against selectedWord[i], 
        for (var i= count; i > 0; i--){
                if (dashedArray.includes("_ ") === true) {
                        for(var j=0; j<selectedWord.length; j++) {
                                if(usersGuess === selectedWord[j] && count > 0) {
                                        //change value in selectedWord Array
                                        dashedArray[j] = usersGuess
                                        //Update dashed Array
                                        document.querySelector(".selected").innerHTML = `
                                        <h1> ${dashedArray.join(" ")} </h1>
                                        `;
                                } else  if (count > 0) {
                                        console.log("did not match!");
                                        //Subtract guess and update display
                                        if (guessedLetters.includes(usersGuess) === false && selectedWord.includes(usersGuess) === false){
                                                guessedLetters.push(usersGuess);   
                                                //MINUS ONE FROM COUNT?!?! 
                                                count--  
                                                }
                                        document.querySelector(".guessed").innerHTML = `
                                        <h1> ${guessedLetters} </h1>
                                        `;
                                        document.querySelector(".count").innerHTML = `
                                        <h1> Turns Left: ${count} </h1>
                                        `
                                        } else {
                                        console.log("GAME OVER, YOU LOSE")
                                }
                        } 
                } else {
                 console.log ("YOU WINNN!!!")
                }
        }

}
//Check user guess keystrokes against selectedWord[i], 
        //display Letter in correct Way
        //subtract from one number of guesses left
        // play success sound 
// else display key stoke as Letters Guessed
        //subtract from one number of guesses left
        // play defeat sound
        //update hangman image 