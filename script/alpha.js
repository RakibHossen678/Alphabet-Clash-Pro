// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }

function continueGame(){
    //generate random alphabet
    const alphabet = getARandomAlphabet()
    // console.log(alphabet);

    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet
}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame('')
}