let historyScore = document.getElementById('score');
let engineScore = document.getElementById('engineScore');
let personalScore = document.getElementById('yourScore');
let gameOutcomeShout = document.getElementById('gameOutcome');
let engineSelectionOutput = document.getElementById('engineSelectin');
let yourSelectionOutput = document.getElementById('yourSelection');
let rock=document.getElementById('rock');
let paper =document.getElementById('paper');
let scissors =document.getElementById('scissors');
let activateSession = document.getElementById('startSession');
let gameOver=document.getElementById('gameOutCome');
let gameOverClose = document.getElementById('close');
let resultStatement = document.getElementById('gameOutComeInfo')
let sessionCount=0;
let checkerEngine,checkerUser,sessionOn = false,initial;

function gameResultHide(){
    gameOver.style.visibility= 'hidden'
    gameOver.style.zIndex = ''
}
function gameResultShow(){
    gameOver.style.visibility= 'visible'
    gameOver.style.zIndex = ''
    setTimeout(gameResultHide,3500);
}
function checkWinner(){
    resultStatement.innerHTML="";
    if(checkerEngine==checkerUser){
        resultStatement.innerHTML='DRAW';
        resultStatement.style.color='green';
        yourSelectionOutput.innerHTML
        setTimeout(gameResultShow,1500);
    }
    else if(checkerEngine=='rock' && checkerUser=='paper'){
        resultStatement.innerHTML='YOU WIN';
        resultStatement.style.color='aquamarine';
        setTimeout(gameResultShow,1500);
    }
    else if(checkerEngine=='scissors' && checkerUser=='rock'){
        resultStatement.innerHTML='YOU WIN';
        resultStatement.style.color='aquamarine';
        setTimeout(gameResultShow,1500);
    }
    else if(checkerEngine=='paper' && checkerUser=='scissors'){
        resultStatement.innerHTML='YOU WIN';
        resultStatement.style.color='aquamarine';
        setTimeout(gameResultShow,1500);
    }
    else{
        resultStatement.innerHTML="YOU LOOSE";
        resultStatement.style.color='red';
        setTimeout(gameResultShow,1500);
        }
}
function engineSelection(){
    let randomSelection = Math.floor(Math.random()*4);
    randomSelection==0?randomSelection++:randomSelection
    engineSelectionOutput.innerHTML = "";
    console.log(randomSelection)
    switch (randomSelection){
        case 1:
            engineSelectionOutput.appendChild(rock.cloneNode(true));

            checkerEngine='rock';
            break;
        case  2:
            engineSelectionOutput.appendChild(paper.cloneNode(true));
            checkerEngine='paper';
            break;
        case  3:
            engineSelectionOutput.appendChild(scissors.cloneNode(true));
            checkerEngine='scissors';
            break;
        default:
            engineSelectionOutput.innerHTML = "";

    }
    console.log(engineSelectionOutput)
    
    return sessionCount++,checkWinner()
}
function itemSelection(item){
    yourSelectionOutput.innerHTML = "";
    switch (item){
        case 'ro':
            yourSelectionOutput.appendChild(rock.cloneNode(true));
            checkerUser='rock';
            engineSelection()
            break;
        case 'pa':
            yourSelectionOutput.appendChild(paper.cloneNode(true));
            checkerUser='paper';
            engineSelection()
            break;
        case 'sc':
            yourSelectionOutput.appendChild(scissors.cloneNode(true));
            checkerUser='scissors';
            engineSelection()
            break;
        default:
            yourSelectionOutput.innerHTML = "";

    }
    return checkerUser
}

function sessionEnd(){
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true
    gameOutcomeShout.style.visibility ='hidden'
    sessionOn = false
    activateSession.innerHTML='START'
    engineSelectionOutput .innerHTML =""
    yourSelectionOutput .innerHTML=""
}
function sessionStart(){
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false
    sessionOn=true
    activateSession.innerHTML='STOP'
}
function checkSession(){
    if(sessionOn==true){ 
        sessionEnd()
    }
    else if(sessionOn==false){
        sessionStart()
    }
    else return null
}

gameOverClose.addEventListener('click', gameResultHide);
activateSession.addEventListener('click',checkSession);
window.onload = sessionEnd;