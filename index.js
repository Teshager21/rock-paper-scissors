console.log("Hello World!");

const getComputerChoice=()=>{
Math.floor(Math.random()*3);

}

const getHumanChoice=()=>{
    return choice=prompt("Input:0 for paper\n      1 for Scissor\n      2 for Rock\nOne, Two, three go:");
    
}

getHumanChoice();
getComputerChoice();