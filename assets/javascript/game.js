
if (document.body.style.backgroundImage = "url('./assets/images.background1.jpg')" !== true ) {
        document.body.style.backgroundImage = "url('./assets/images/background2.jpg')";
};
//Playing Audio
// window.onload = function() {
//         document.getElementById("my_audio").play();
//     }
var insert = document.getElementById("insert");
// winnning Images array
var winningImage = ["'./assets/images/winner1.jpg'","'./assets/images/winner2.jpg'","'./assets/images/winner3.jpg'"]
var randomNumber = Math.floor(Math.random()*winningImage.length);
var winningImageDisplayed = winningImage[randomNumber];
var winningText = "> <h1> Congrats You Win! </h1> <h3>You are way better than Toby, but we already knew that.</h3> <h2> Refresh the page to play again! </h2>";

//losing image array
var losingImage = ["'./assets/images/gameover1.jpg'","'./assets/images/gameover2.jpg'","'./assets/images/gameover3.jpg'"]
var randomNumber = Math.floor(Math.random()*losingImage.length);
var losingImageDisplayed = losingImage[randomNumber];
var losingText = "> <h1> Game Over Loser! </h1> <h3>Maybe if you weren't slacking off with Jim, you would have done better!</h3> <h2> Refresh the page to play again!</h2>";
//End of game function - shows win or lose image and string
function endOfGame(image, text) {
        var alertDiv =  document.createElement("div");
        alertDiv.classList.add("alertDiv");
        alertDiv.innerHTML = ('<img src=' + image +  text);
        var insert = document.getElementById("insert");
        insert.appendChild(alertDiv);
};
// //alphabet for guesses
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// Create word bank - 
//var word = "string1"  (REFACTOR THIS USING SPLIT & JOIN)
var dogSays = "arf";
var catSays = "meow";
//var wordBank = [string1, string 2, etc.]
var wordBank = ["stanley","michael", "angela", "oscar","dwight", "scranton","pamela", "jim", "toby", "darryl","narddawg","flenderson","deangelo","creed","holly","levinson"];
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
};
//  Display selectedWord as dashes in html
console.log(dashedArray);
document.querySelector(".selected").innerHTML = `
<h1> ${dashedArray.join(" ")} </h1>
`;
//Start turns and Display it
var turns = 7;
function turnUpdate(){
        document.querySelector(".count").innerHTML = `
        <h1> Turns Left: ${turns} </h1>
        `
}
//display turns
turnUpdate();

// reset 
// function reset() {
//         alertDiv.classList.remove("alertDiv");
//         alertDiv.innerHTML = "";
//         turns = 0
//         //Generate selected Word
//         selectedWord = wordBank[Math.floor((Math.random()*wordBank.length))]
//         var dashedArray = [];
//         for (var i = 0; i< selectedWord.length; i++){
//         dashedArray[i]="_ ";
//         };
//         //empty words guessed
//         guessedLetters = [];
// };
// Listen for user key event
document.onkeyup = function(event) {
        if (alphabet.includes(event.key.toLowerCase()) === true) {
        var usersGuess = event.key.toLowerCase();
        //save to varible userKey = keyevent
        console.log(usersGuess);
        } else {
                return ""
        }
        //Initalize game, Score must be > 0 to play
        for (var i= turns; i > 0; i--){
                // Check if the selecetedWord is complete.
                if (dashedArray.includes("_ ") === true) {
                        //Loop through selectedWord for comparison 
                        for(var j=0; j<selectedWord.length; j++) {
                                 //Check user guess keystroke against each letter in selectedWord, Must have turns left
                                if(usersGuess === selectedWord[j] && turns > 0) {
                                        //change value in selectedWord Array to matched guess
                                        dashedArray[j] = usersGuess
                                        //Update dashed Array
                                        document.querySelector(".selected").innerHTML = `
                                        <h1> ${dashedArray.join(" ")} </h1>
                                        `;
                                        //Users guess does not match and turns are left
                                } else  if (turns > 0) {
                                        console.log("did not match!");
                                       //Check if users guessed has not be guessed yet, AND it did not match any other part of the selectedWord
                                        if (guessedLetters.includes(usersGuess) === false && selectedWord.includes(usersGuess) === false){
                                                //First time guessed, must add to guessLetters array
                                                guessedLetters.push(usersGuess);   
                                                //Lose Turn
                                                //Dispaly guessedLetters
                                                document.querySelector(".guessed").innerHTML = `
                                                <h1> ${guessedLetters} </h1>
                                                `;
                                                turns-- 
                                                }
                                        
                                        //Update turn count
                                        document.querySelector(".count").innerHTML = `
                                        <h1> Turns Left: ${turns} </h1>
                                        `
                                        //Out of guesses and selectedWord is not complete - Gameover
                                        } else {
                                        console.log("GAME OVER, YOU LOSE");
                                        endOfGame(losingImageDisplayed,losingText);
                                }
                        } 
                } else {
                        //turns are left AND the selectedWord is complete - Winner
                        console.log ("YOU WINNN!!!")
                        endOfGame(winningImageDisplayed,winningText);
                        i = 0
                }
        }

}
//Check user guess keystrokes against selectedWord[i], s
        //display Letter in correct Way
        //subtract from one number of guesses left
        // play success sound 
// else display key stoke as Letters Guessed
        //subtract from one number of guesses left
        // play defeat sound
        //update hangman image 
// var myButton = document.getElementById("myButton");
// myButton.addEventListener("click", function () {

//         insert.innerHTML = ("");
//         // alertDiv.classList.remove("alertDiv");
//         turns = 10;
//         turnUpdate();
//         //Generate selected Word
//         selectedWord = wordBank[Math.floor((Math.random()*wordBank.length))]
//         console.log(selectedWord);
//         dashedArray = [];
//         for (var i = 0; i< selectedWord.length; i++){
//         dashedArray[i]="_ ";
//         };
//         // Display New selectedWord
//         document.querySelector(".selected").innerHTML = `
//         <h1> ${dashedArray.join(" ")} </h1>
//         `;
//         //empty words guessed
//         guessedLetters = [];
//         document.querySelector(".guessed").innerHTML = `
//         `;
// });
function reset() {
        insert.innerHTML = ("");
        // alertDiv.classList.remove("alertDiv");
        turns = 7;
        turnUpdate();
        //Generate selected Word
        selectedWord = wordBank[Math.floor((Math.random()*wordBank.length))]
        console.log(selectedWord);
        dashedArray = [];
        for (var i = 0; i< selectedWord.length; i++){
        dashedArray[i]="_ ";
        };
        // Display New selectedWord
        document.querySelector(".selected").innerHTML = `
        <h1> ${dashedArray.join(" ")} </h1>
        `;
        //empty words guessed
        guessedLetters = [];
        document.querySelector(".guessed").innerHTML = `
        `;
};