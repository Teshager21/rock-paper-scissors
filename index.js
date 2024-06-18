console.log("Hello Welcome to this game!");
let roundCounter=0;
    let humanScore=0,computerScore=0;
let choice;
let score=document.querySelector('#score');
// DOM MAN
const container= document.querySelector('.container');
let result=document.createElement('div');
let gameResult=document.createElement('div');

let scissor= document.createElement('img')
let paper= document.createElement('img')
let rock= document.createElement('img')
let paper1= document.createElement('img')
let rock1= document.createElement('img')
let scissor1= document.createElement('img')
paper.srcset="https://www.wikihow.com/images/thumb/4/49/Play-Rock%2C-Paper%2C-Scissors-Step-7-Version-4.jpg/v4-728px-Play-Rock%2C-Paper%2C-Scissors-Step-7-Version-4.jpg.webp";
rock.srcset="https://www.wikihow.com/images/thumb/1/1e/Play-Rock%2C-Paper%2C-Scissors-Step-6-Version-4.jpg/v4-728px-Play-Rock%2C-Paper%2C-Scissors-Step-6-Version-4.jpg.webp";
scissor.srcset="https://www.wikihow.com/images/thumb/b/b2/Play-Rock%2C-Paper%2C-Scissors-Step-8-Version-4.jpg/v4-728px-Play-Rock%2C-Paper%2C-Scissors-Step-8-Version-4.jpg.webp";

paper1.srcset="https://www.wikihow.com/images/thumb/4/49/Play-Rock%2C-Paper%2C-Scissors-Step-7-Version-4.jpg/v4-728px-Play-Rock%2C-Paper%2C-Scissors-Step-7-Version-4.jpg.webp";
rock1.srcset="https://www.wikihow.com/images/thumb/1/1e/Play-Rock%2C-Paper%2C-Scissors-Step-6-Version-4.jpg/v4-728px-Play-Rock%2C-Paper%2C-Scissors-Step-6-Version-4.jpg.webp";
scissor1.srcset="https://www.wikihow.com/images/thumb/b/b2/Play-Rock%2C-Paper%2C-Scissors-Step-8-Version-4.jpg/v4-728px-Play-Rock%2C-Paper%2C-Scissors-Step-8-Version-4.jpg.webp";


let tapping =document.createElement('img');
tapping.srcset="https://www.wikihow.com/images/thumb/6/66/Play-Rock%2C-Paper%2C-Scissors-Step-3-Version-4.jpg/550px-nowatermark-Play-Rock%2C-Paper%2C-Scissors-Step-3-Version-4.jpg.webp";
tapping.autoplay='true';
// container.querySelector('.card-group').prepend(tapping);
// container.querySelector('.card-group').classList.add('d-none');


//EVENTS HANDLING
paper.classList.add('img-fluid')
rock.classList.add('img-fluid')
scissor.classList.add('img-fluid')
paper1.classList.add('img-fluid','flip')
rock1.classList.add('img-fluid','flip')
scissor1.classList.add('img-fluid','flip')
humanChoice.appendChild(paper);
computerChoice.appendChild(rock1);
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
        gameResult.classList.add('d-none','my-4','border','border-primary','rounded-1') ;
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
     document.getElementById('humanChoice').innerHTML='';
    if(humanChoice===0) document.getElementById('humanChoice').appendChild(paper);
    if(humanChoice===1) document.getElementById('humanChoice').appendChild(scissor);
    if(humanChoice===2) document.getElementById('humanChoice').appendChild(rock);
    document.getElementById('computerChoice').innerHTML='';
    if(computerChoice===0) document.getElementById('computerChoice').appendChild(paper1);
    if(computerChoice===1) document.getElementById('computerChoice').appendChild(scissor1);
    if(computerChoice===2) document.getElementById('computerChoice').appendChild(rock1);

    
    // document.getElementById('computerChoice').textContent=choices[computerChoice];
    // document.getElementById('computerChoice').appendChild(paper);
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



