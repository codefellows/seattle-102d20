


function countToTen(){
    for(var i = 0; i <=1; i++){
        document.write('<p>' + i + '</p>');
    }
}

function getNames(){
    var userName;
    while(confirm("Do you have another name to add to the list?")){
        userName = prompt('Please enter your name!');
        document.write('<li>' + userName + '</li>');
    }
}

function guessNumber(){
    var correctAnswer = getRandomNumber();
    guesses = 5;
    for(var i = guesses; i > 0; i--){
        var userGuess = prompt('Please enter a number between 1-100');
        if(userGuess == correctAnswer){
            alert('You got it right!');
            i = 0;
        } else {
            userGuess = alert('Incorrect');
        }
        if(i == 1){
            alert('So sorry.  You are not a good guesser! The correct answer is '+ correctAnswer);
        }
    }
}

function getRandomNumber(){
    return Math.floor(Math.random() * Math.floor(100));
}

document.write(getRandomNumber());

