function computerPlay() {
    let computerSelection;
    let random = Math.floor(Math.random()*100+1);
    console.log(random);
    if (random <= 33)
        {
            computerSelection = 'rock';        
        }
    else if (random > 33 && random <= 67)
        {
            computerSelection = 'paper';
        }
    else
        computerSelection = 'scissors'

    console.log(computerSelection);

    return computerSelection;

}

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0; 

let gamesPlayedLog = document.querySelector('#games');
let playerScoreLog = document.querySelector('#playerScore');
let computerScoreLog = document.querySelector('#computerScore');
let resultLog = document.querySelector('#result');

function game(playerSelection) { 
    if (playerScore < 5 && computerScore < 5)
    {
        playRound(playerSelection);
    }

    else determineWinner();
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection=(button.id);
        console.log(playerSelection);
        game(playerSelection);
    });
})



function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection == computerSelection)
        {
            tie();
            resultLog.textContent = 'Tie!';
        } 
    else if (computerSelection == 'rock')
        {
            if (playerSelection == 'paper')
                {
                   resultLog.textContent = 'You Win! Paper beats Rock';
                    playerWin();
                }
            else if (playerSelection == 'scissors')
                {
                    resultLog.textContent = 'You Lose! Rock beats Scissors';
                    computerWin();
                }
        }
    else if (computerSelection == 'paper')
        {
            if (playerSelection == 'scissors')
                {
               resultLog.textContent = 'You Win! Scissors beats Paper';
                playerWin();
                }
             else if (playerSelection == 'rock')
                {
               resultLog.textContent = 'You Lose! Paper beats Rock';
                computerWin();
                }
        }

        else if (computerSelection == 'scissors')
        {
            if (playerSelection == 'rock')
                {
               resultLog.textContent = 'You Win! Rock beats Scissors';
                playerWin();
                }
             else if (playerSelection == 'paper')
                {
                resultLog.textContent = 'You Lose! Scissors beats Paper';
                computerWin();
                }
        }
}

function playerWin(){
        playerScore++;
        roundsPlayed++;
        playerScoreLog.textContent = 'Player Score: ' + playerScore;
        gamesPlayedLog.textContent = 'Games Played: ' + roundsPlayed;
        checkForWinner();
        //alert('Games Played: ' + roundsPlayed + '\n\nThe Score is:\nPlayer: ' + playerScore + "\nComputer: " + computerScore);
    }

function computerWin(){
    computerScore++;
    roundsPlayed++;
    computerScoreLog.textContent = 'Computer Score: ' + computerScore;
    gamesPlayedLog.textContent = 'Games Played: ' + roundsPlayed;
    checkForWinner();

   //alert('Games Played: ' + roundsPlayed + '\n\nThe Score is:\nPlayer: ' + playerScore + "\nComputer: " + computerScore);
}

function tie(){
    roundsPlayed++;
    gamesPlayedLog.textContent = 'Games Played: ' + roundsPlayed;
    checkForWinner();
}

function checkForWinner() {
    if (playerScore > 4 || computerScore > 4)
        {determineWinner();}

}

function determineWinner(){
    if (playerScore > computerScore) 
    {
        resultLog.textContent = 'You are the winner!';
        resultLog.setAttribute('style', 'font-size: xx-large');
        playerScoreLog.setAttribute('style', 'color: red');
    }

    else (computerScore > playerScore)
    {
       resultLog.textContent = 'You are the loser! Computer wins!';  
       resultLog.setAttribute('style', 'font-size: xx-large');
       computerScoreLog.setAttribute('style', 'color: red');

    }

}

//game();