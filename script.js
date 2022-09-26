


function game (){ 
   
 let player = prompt("rock, paper or scissors?")
    console.log("player choice: " + player)

    let myGame = ['rock', 'paper', 'scissors']
    let computer = myGame[Math.floor(Math.random() * myGame.length)];
    console.log("computer choice: " + computer)
   


    if(player == computer){
        console.log("Draw!") ;
    }
    else if (computer == "rock"){
      return (player == "paper") ? console.log("You win, paper beats rock") : console.log("You lose, rock beats scissors")
    }
    else if (computer == "paper"){
        return (players == "scissors") ? console.log("You win, scissors beats paper") :console.log("You lose, paper beats beats")
      }
    else if (computer == "scissors"){
        return (player == "rock") ? console.log("You win, rock beats scissors") : console.log("You lose, scissors beats paper")
      }

}
game()
