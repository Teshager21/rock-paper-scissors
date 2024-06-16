console.log("Hello Welcome to this game!");

let humanScore=0,computerScore=0;
const container= document.querySelector('.container');
let result=document.createElement('div');
result.classList.add('card');
const choices=['paper','scissor','rock'];
const getComputerChoice=()=>{
return Math.floor(Math.random()*3);



}

const getHumanChoice=()=>{
   
    choice=prompt("Type one of the options below:\n -Paper\n -Scissor or  \n -Rock,\n One Two, three go:").trim().toLocaleLowerCase();
    console.log(choices.indexOf(choice));
    if (    choices.indexOf(choice)!==-1){
        return choices.indexOf(choice);
    }
   else {
    console.log('Please type your choice correctly');
    console.log(choices.indexOf(choice));
     getHumanChoice();
   } 
}

const playGame=()=>{
      //DOM MANIPULATION
     
      
    for(i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
  
    if(humanScore===computerScore){
        console.log("Its a tie");
        result.textContent="Its a tie";
       

    }else if(humanScore>computerScore){
        console.log('You Won the Game!!!',`${humanScore} to ${computerScore}`)
        result.textContent='You Won the Game!!!',`${humanScore} to ${computerScore}`;
    }else {
        console.log("Oops, You Lost",`${humanScore} to ${computerScore}`);
        result.textContent="Oops, You Lost",`${humanScore} to ${computerScore}`;
        
    }

   
    container.appendChild(result);
  
    
}

const playRound=(humanChoice,computerChoice)=>{
    
    const human= parseInt(humanChoice);
    const computer=parseInt(computerChoice);
    const diff= Math.abs(human-computer);
    let winner;
    //WHEN THERE IS A TIE
    if(human===computer){
        console.log("This round  a tie");
        result.textContent="This round  a tie";
    }
    if(diff===1) winner = Math.max(human,computer);
    if(diff==2) winner=Math.min(human,computer);
   
    if (winner===human){
        humanScore++;
        console.log("Dude, You Won this round! ",`${choices[human]} beats ${choices[computer]}`)
        result.textContent=`Dude, You Won this round! ${choices[human]} beats ${choices[computer]}`
    } 
    if(winner===computer) {
        console.log(`Dude, You Lost this round! ${choices[computer]} beats ${choices[human]}`)
        result.textContent=`Dude, You Lost this round! ${choices[computer]} beats ${choices[human]}`;
        computerScore++;
     
    }
    container.appendChild(result);   

}


playGame();


