'use strict';

let rollDiceButton=document.querySelector('.btn--roll');
let players=document.querySelectorAll('.player');
let holdButton=document.querySelector('.btn--hold');

//initial game code
let image=document.querySelector('.dice');
image.style.display="none";


let scores=document.querySelectorAll('.score');
for(let i=0;i<scores.length;i++){
    scores[i].textContent=0;
}
//roll dice code
const userDiceRoll=function(activePlayer,normalPlayer,dno){
    let playerScore=activePlayer.querySelector('.current-score').textContent;
    let playerCurrentScore=parseInt(playerScore)+dno;
    if(dno!=1){

    
        activePlayer.querySelector('.current-score').textContent=playerCurrentScore;
    }
    else{
        activePlayer.querySelector('.current-score').textContent=0;
        activePlayer.classList.remove('player--active');
        normalPlayer.classList.add('player--active');

    }
    return playerCurrentScore;
};

let player1CurrentScore= 0;
let player2CurrentScore= 0;
rollDiceButton.addEventListener('click',function(){
    let diceNo=Math.trunc(Math.random()*6)+1;
    image.style.display="inline-block";
    image.src=`dice-${diceNo}.png`;

    if(players[0].classList.contains('player--active')){
        let playerFinalScore=userDiceRoll(players[0],players[1],diceNo);
        player1CurrentScore=playerFinalScore;
        
    }
    else if(players[1].classList.contains('player--active')){
       let playerFinalScore= userDiceRoll(players[1],players[0],diceNo);
       player2CurrentScore=playerFinalScore;
        


    }

});

//holdButton code
let newHighScorePlayer1=0;
let newHighScorePlayer2=0;
holdButton.addEventListener('click',function(){
    if(players[0].classList.contains('player--active')){
        players[0].classList.remove('player--active');
        players[1].classList.add('player--active');

        newHighScorePlayer1 = parseInt(players[0].querySelector('.score').textContent)+ player1CurrentScore;
        players[0].querySelector('.score').textcontent=newHighScorePlayer1;
        player1CurrentScore=0;
        players[0].querySelector('.current-score').textContent=0;

        if(newHighScorePlayer1>=100){
            players[0].classList.add('player--winner');
        }


    }
    else if(players[1].classList.contains('player-active')){
        players[1].classList.remove('player--active');
        players[0].classList.add('players-active');

        newHighScorePlayer2=parseInt(players[1].querySelector('.score').textContent)+player2CurrentScore;
        players[1].querySelector('.score').textContent=newHighscorePlayer2;
        player2CurrentScore=0;
        players[1].querySelector('.current-score').textContent-0;

        if(newHighScorePlayer2=100){
            players[1].classList.add('player--winner');
        }
    }

});