// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }

document.addEventListener('keyup',function handleKeyboardButtonPreess(event){
    const playerPressed =(event.key)
    console.log(playerPressed);

    if(playerPressed==='Escape'){
        gameOver()
    }
    
    

    const currentAlphabet=document.getElementById('current-alphabet')
    const radomAlphabet=(currentAlphabet.innerText).toLowerCase();
    // console.log(playerPressed , radomAlphabet);

    if(playerPressed === radomAlphabet){
        console.log('You get a point');
        //update score
        const currentScore=getTextElementValueById('current-score')
        // console.log(currentScore);
        
        const updatedScore=currentScore + 1 ;
        setTextElementValueById('current-score',updatedScore)



        // const currentScoreElement = document.getElementById('current-score');
        // const currentScore=parseInt(currentScoreElement.innerText);
        // const newScore = currentScore + 1
        // currentScoreElement.innerText=newScore;



        //start new round
        removeBgColor(radomAlphabet)
        continueGame()
    }
    else{
        console.log('you miss .You lost a life');

        const currentlife=getTextElementValueById('current-life')
        // console.log(currentScore);
        
        const updatedlife=currentlife - 1 ;
        setTextElementValueById('current-life',updatedlife)


        // const currentLifeElement=document.getElementById('current-life');
        // const currentLife=parseInt(currentLifeElement.innerText);

        // const newLife=currentLife-1

        // currentLifeElement.innerText=newLife;

        if(updatedlife===0){
            gameOver()
            
        }
    }
})

function continueGame(){
    //generate random alphabet
    const alphabet = getARandomAlphabet()
    // console.log(alphabet);

    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet

    addBgColor(alphabet)
}

function play(){
    hideElementById('home-screen')
    hideElementById('final-score')

    showElementById('play-ground')
    //reset scre and life
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)

    
    continueGame('')
}
function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score');

    const lastScore=getTextElementValueById('current-score')
    // console.log(lastScore);
    setTextElementValueById('game_score',lastScore)

    const currentAlphabet=getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBgColor(currentAlphabet)


}

// function playAgain(){
//     hideElementById('final-score')
//     showElementById('home-screen');


// }