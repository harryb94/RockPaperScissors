function computerPlay() {
    let computerChoice;
    let random = Math.floor(Math.random()*100+1);
    console.log(random);
    if (random <= 33)
        {
            computerChoice = 'Rock';        
        }
    else if (random > 33 && random <= 67)
        {
            computerChoice = 'Paper';
        }
    else
        computerChoice = 'Scissors'

    console.log(computerChoice);

}

computerPlay();
