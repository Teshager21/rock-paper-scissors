console.log("Hello Welcome to this game!");

let humanScore=0,computerScore=0;
const choices=['paper','scissor','rock'];
const getComputerChoice=()=>{
return Math.floor(Math.random()*3);

}

const getHumanChoice=()=>{

    choice=prompt("Type one of the options below:\n -Paper\n -Scissor or  \n -Rock,\n One Two, three go:").trim().toLocaleLowerCase();
    return choices.indexOf(choice);
}

const playGame=()=>{
    for(i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log(`score board: human= ${humanScore} computer= ${computerScore}`);
}

const playRound=(humanChoice,computerChoice)=>{
    
    const human= parseInt(humanChoice);
    const computer=parseInt(computerChoice);
    const diff= Math.abs(human-computer);
    let winner;
    //WHEN THERE IS A TIE
    if(human===computer){
        console.log("Its a tie");
    }
    if(diff===1) winner = Math.max(human,computer);
    if(diff==2) winner=Math.min(human,computer);

    

    console.log(`index of paper is : ${choices.indexOf('scissor')}`);
    console.log(human ,computer);    
    if (winner===human){
        humanScore++;
        console.log("Dude, You Won",`${choices[human]} beats ${choices[computer]}`)
    } 
    if(winner===computer) {
        console.log("Dude, You Lost",`${choices[computer]} beats ${choices[human]}`)
        computerScore++;
     
    }
     

}


playGame();


