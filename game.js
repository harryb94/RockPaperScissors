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

function game() {
    let playerScore = 0;
    let computerScore = 0;    
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
                }
            else if (playerSelection == 'scissors')
                {
                    alert('You Lose! Rock beats Scissors');
                }
        }
    else if (computerSelection == 'paper')
        {
            if (playerSelection == 'scissors')
                {
                alert('You Win! Scissors beats Paper');
                }
             else if (playerSelection == 'rock')
                {
                alert('You Lose! Paper beats Rock');
                }
        }

        else if (computerSelection == 'scissors')
        {
            if (playerSelection == 'rock')
                {
                alert('You Win! Rock beats Scissors');
                }
             else if (playerSelection == 'paper')
                {
                alert('You Lose! Scissors beats Paper');
                }
        }
}


game();