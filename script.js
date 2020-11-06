let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return Math.floor(Math.random()*10);
};

const compareGuesses = (humanGuess, compGuess, targetNum) =>{
    const humanDiff = Math.abs(humanGuess-targetNum);
    const compDiff = Math.abs(compGuess - targetNum);

    if (compDiff < humanDiff){
        return false;
    } else {
        return true;
    };
};

const updateScore = (winner) =>{
    if (winner === 'human'){
        humanScore++;
    } else if (winner === 'computer'){
        computerScore++;
    } else {
        console.log('Something went wrong');
    };
};

const advanceRound = () =>{
    currentRoundNumber++;
};

