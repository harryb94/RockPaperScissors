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

}

computerPlay();

let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

