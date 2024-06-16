console.log("Hello World!");

let humanScore=0,computerScore=0;

const getComputerChoice=()=>{
Math.floor(Math.random()*3);

}

const getHumanChoice=()=>{
    choice=prompt("Type one of the options below:\n -Paper\n -Scissor or  \n -Rock,\n One Two, three go:").trim().toLocaleLowerCase();
    console.log(choice);
}



getHumanChoice();
getComputerChoice();