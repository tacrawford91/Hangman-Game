
console.log(dashedArray);
document.querySelector(".selected").innerHTML = `
<h1> ${dashedArray.join(" ")} </h1>
`;
count = 10;
// Listen for user key event
document.onkeyup = function(event) {
        var usersGuess = event.key;
        //save to varible userKey = keyevent
    console.log(usersGuess);
        //Setting up count - 
        //check if key is in selectedWord - selectedWord.includes(userKey)
        //if True
        for (var i = 0; i < count; i++ ) {
            if (selectedWord.includes(usersGuess) === true) {
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
                console.log(count);
            //subtract 1 guess Update display
            //play victory sound
            //check for word completion
            } else {   // if false
                // add letter to guessed list
                guessedLetters.push(usersGuess);
                document.querySelector(".guessed").innerHTML = `
                <h1> ${guessedLetters} </h1>
                `;
                // subtract 1 from guess count
                //update hangman image
                //play loser sound
            console.log("key is false");
            };
        };
};
//check if key is in selectedWord - selectedWord.includes(userKey)


