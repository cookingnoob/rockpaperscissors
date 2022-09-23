
function getComputerChoice() { 
let myGame = ['rock', 'paper', 'scissors']
let randomValue = myGame[Math.floor(Math.random() * myGame.length)];
console.log(randomValue + " computers choice")
}
getComputerChoice()


function playersChoice (){
    let play = prompt("rock, paper or scissors?")
    console.log(play + " players choice")
}
playersChoice()