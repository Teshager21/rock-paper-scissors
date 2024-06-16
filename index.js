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

const playRound=(humanChoice,computerChoice)=>{
    const human= parseInt(humanChoice);
    const computer=parseInt(computerChoice);
    const diff= Math.abs(human-computer);
    let winner;
    // [1,1]= if they are equal ====>it is a tie
    // [0,1],[1,2]==>computerwon----diff of -1
    // [1,0],[1,2]=>humanwon---------diff of +1
    //----when the abs(diff)===1 , the greater wins
    // [0,2]=>humanwon=-------------diff of -2
    // [2,0]=>computerwon------------diff +2
    //-----when the abs(diff)===2, the lower wins

    //WHEN THERE IS A TIE
    if(human===computer){
        console.log("Its a tie");
    }
    if(diff===1) winner = Math.max(human,computer);
    if(diff==2) winner=Math.min(human,computer);

    

    console.log(`index of paper is : ${choices.indexOf('scissor')}`);
    console.log(human ,computer);    
    if (winner===human){
        console.log("Dude, You Won",`${choices[human]} beats ${choices[computer]}`)
    } 
    if(winner===computer) {
        console.log("Dude, You Lost",`${choices[computer]} beats ${choices[human]}`)
     
    }
     

}
playRound(getHumanChoice(),getComputerChoice());

getHumanChoice();
getComputerChoice();