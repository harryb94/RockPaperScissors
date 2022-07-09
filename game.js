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

function game() { 
    playRound();
}

function playRound() {
    let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
    const computerSelection = computerPlay();
    if (playerSelection == computerSelection)
        {
            alert('Tie!');
        } 
    else if (computerSelection == 'rock')
        {
            if (playerSelection == 'paper')
                {
                    alert('You Win! Paper beats Rock');
                    playerWin();
                }
            else if (playerSelection == 'scissors')
                {
                    alert('You Lose! Rock beats Scissors');
                    computerWin();
                }
        }
    else if (computerSelection == 'paper')
        {
            if (playerSelection == 'scissors')
                {
                alert('You Win! Scissors beats Paper');
                playerWin();
                }
             else if (playerSelection == 'rock')
                {
                alert('You Lose! Paper beats Rock');
                computerWin();
                }
        }

        else if (computerSelection == 'scissors')
        {
            if (playerSelection == 'rock')
                {
                alert('You Win! Rock beats Scissors');
                playerWin();
                }
             else if (playerSelection == 'paper')
                {
                alert('You Lose! Scissors beats Paper');
                computerWin();
                }
        }
}

function playerWin(){
        playerScore++;
        return playerScore;
    }

function computerWin(){
    computerScore++;
    return computerScore;
}
game();