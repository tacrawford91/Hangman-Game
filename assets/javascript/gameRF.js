//setting Background Image    
document.body.style.backgroundImage = "url('./assets/images/background2.jpg')";
// Playing Audio
window.onload = function() {
        document.getElementById("my_audio").play();
    }

// initial varibles
    var wordBank = ["stanley","michael", "angela", "oscar","dwight", "scranton","pamela", "jim", "toby", "darryl","narddawg","flenderson","deangelo","creed","holly","levinson"];
    var selectedWord = wordBank[random(wordBank)];
    var guessedLetters = [];
    var dashedArray = [];
    var wins = 0;
    var turns = 7;
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//End of Game Varibles
    var insert = document.getElementById("insert");
    // winnning Images array
    var winningImage = ["'./assets/images/winner1.jpg'","'./assets/images/winner2.jpg'","'./assets/images/winner3.jpg'"]
    var winningImageDisplayed = winningImage[random(winningImage)]
    var winningText = "> <h1> Congrats You Win! </h1> <h3>You are way better than Toby, but we already knew that.</h3> <h2> Press the reset button to play again! </h2>";

    //losing image array
    var losingImage = ["'./assets/images/gameover1.jpg'","'./assets/images/gameover2.jpg'","'./assets/images/gameover3.jpg'"]
    var losingImageDisplayed = losingImage[random(losingImage)];
    var losingText = "> <h1> Game Over Loser! </h1> <h3>Maybe if you weren't slacking off with Jim, you would have done better!</h3> <h2> Press the reset button to play again!</h2>";
// Other Misc
    //Generate dashedarray
    for (var i = 0; i< selectedWord.length; i++){
        dashedArray[i]="_ ";
        };

//functions
    //generates random number
    function random(array) {
        var randomNumber = Math.floor(Math.random()*array.length)
        return randomNumber
    };
    //Upates the displayed number of turns
    function turnUpdate(){
        document.querySelector(".count").innerHTML = `
        <h1> Turns Left: ${turns} </h1>
        `
    }
    //Updates the displayed dashed array
    function dashedArrayUpdate() {
        document.querySelector(".selected").innerHTML = `
        <h1> ${dashedArray.join(" ")} </h1>
        `;
    }
    //Updaes the number of wins
    function winsUpdate() {
        document.querySelector(".wins").innerHTML = `
        <h1> Wins: ${wins} </h1>
        `;
    }
    //End of game function - shows win or lose image and string
    function endOfGame(image, text) {
        var alertDiv =  document.createElement("div");
        alertDiv.classList.add("alertDiv");
        alertDiv.innerHTML = ('<img src=' + image +  text);
        var insert = document.getElementById("insert");
        insert.appendChild(alertDiv);
    };
    //RESET Function
    function reset() {
        //delete word for wordBank, for no repeat games
        // console.log(selectedWord);
        // console.log(wordBank.length);
        var indexToRemove = wordBank.indexOf(selectedWord);
        wordBank.splice(indexToRemove,1);
        // console.log("new wordbank length: "+ wordBank.length);
        insert.innerHTML = ("");
        // alertDiv.classList.remove("alertDiv");
        turns = 7;
        turnUpdate();
        //Generate selected Word
        selectedWord = wordBank[Math.floor((Math.random()*wordBank.length))];
        // console.log(selectedWord);
        dashedArray = [];
        for (var i = 0; i< selectedWord.length; i++){
        dashedArray[i]="_ ";
        };
        // Display New selectedWord
        dashedArrayUpdate();
        //empty words guessed
        guessedLetters = [];
        document.querySelector(".guessed").innerHTML = `
        `;
        //update end of game images
        winningImageDisplayed = winningImage[random(winningImage)];
        losingImageDisplayed = losingImage[random(losingImage)];
        };





//Begin Code
// create dashed array
    for (var i = 0; i< selectedWord.length; i++){
        dashedArray[i]="_ ";
        };//////////////
//display dashed array
dashedArrayUpdate()
//////////////////

turnUpdate();//display intial turns
winsUpdate();//Display Number of wins

document.onkeyup = function(event) {
    if (alphabet.includes(event.key.toLowerCase()) === true) {
    var usersGuess = event.key.toLowerCase();
    //save to varible userKey = keyevent
    // console.log(usersGuess);
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
                        dashedArrayUpdate()
                        //Users guess does not match and turns are left
                    } else if (dashedArray.includes("_ ") === false && turns === 1) {
                        endOfGame(winningImageDisplayed,winningText);
                        wins++;
                        winsUpdate();
                        i = 0;
                    }
                    else  if (turns > 0) {
                        // console.log("did not match!");
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
                    turnUpdate()
                    //Out of guesses and selectedWord is not complete - Gameover
                    } else {
                    // console.log("GAME OVER, YOU LOSE");
                    endOfGame(losingImageDisplayed,losingText);
                    }
                } 
        } else {
                //turns are left AND the selectedWord is complete - Winner
                // console.log ("YOU WINNN!!!")
                endOfGame(winningImageDisplayed,winningText);
                wins++;
                winsUpdate();
                i = 0;
            }   
    }

}