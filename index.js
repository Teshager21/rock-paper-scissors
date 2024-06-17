console.log("Hello Welcome to this game!");
let roundCounter=0;
    let humanScore=0,computerScore=0;
let choice;
let score=document.querySelector('#score');
// DOM MAN
const container= document.querySelector('.container');
let result=document.createElement('div');
let gameResult=document.createElement('div');
//EVENTS HANDLING

//trigger rerender

const rerender=()=>{
    container.style.display='none';
    container.style.display='block';
}

result.classList.add('bg-success','card', 'text-white','p-3'); 
gameResult.classList.add('p-2','shadow','text-secondary')
const choices=['paper','scissor','rock'];

const getComputerChoice=()=>{
return Math.floor(Math.random()*3);
}
let choicesBtns= document.querySelector('.choices')


    choicesBtns.addEventListener('click',e=>{ getHumanChoice(e)});

const getHumanChoice=(e)=>{
    if( e.target.nodeName==='BUTTON'){
        rerender();
        choice=choices.indexOf(e.target.textContent.toLowerCase());
       playGame();
       
       
    }

}



const playGame=()=>{
        playRound(choice,getComputerChoice());
        score.textContent=`${humanScore} | ${computerScore}`;
        container.appendChild(result); 
        container.prepend(gameResult);
        gameResult.classList.add('d-none','py-2') ;
        if(roundCounter===5){
            console.log(roundCounter,' ',humanScore,' ' ,computerScore); 
            
            let diff= humanScore-computerScore;
            console.log(humanScore);       
        if(diff==0) gameResult.textContent=("THIS GAME IS A TIE")
        if(diff>0) gameResult.textContent=("YOU WON THE GAME!")
        if(diff<0) gameResult.textContent=("OOPS YOU LOST!")
            humanScore=0;
            computerScore=0;
            roundCounter=0; 
            gameResult.classList.remove('d-none') ;
        }

      }

const playRound=(humanChoice,computerChoice)=>{
    
    const human= parseInt(humanChoice);
    const computer=parseInt(computerChoice);
    const diff= Math.abs(human-computer);
    let winner;
    document.getElementById('humanChoice').textContent=choices[humanChoice];
    document.getElementById('computerChoice').textContent=choices[computerChoice];
    //WHEN THERE IS A TIE
    if(human===computer){
        console.log("This round  a tie");
        result.textContent="This round  a tie";
         result.classList.remove('bg-success');
         result.classList.remove('bg-danger');
        result.classList.add('bg-secondary'); 
    }
       
     
    if(diff===1) winner = Math.max(human,computer);
    if(diff==2) winner=Math.min(human,computer);
   
    if (winner===human){
        humanScore++;
        console.log("Dude, You Won this round! ",`${choices[human]} beats ${choices[computer]}`);
        result.textContent=`Dude, You Won this round! ${choices[human]} beats ${choices[computer]}`;
        result.classList.remove('bg-danger');
        result.classList.remove('bg-secondary');
        result.classList.add('bg-success'); 
    } 
    if(winner===computer) {
        console.log(`Dude, You Lost this round! ${choices[computer]} beats ${choices[human]}`);
        result.textContent=`Dude, You Lost this round! ${choices[computer]} beats ${choices[human]}`;
        result.classList.add('bg-danger'); 
        result.classList.remove('bg-secondary');
        result.classList.remove('bg-success');
        computerScore++;
    }
    container.appendChild(result);  
    roundCounter++;
   

}



