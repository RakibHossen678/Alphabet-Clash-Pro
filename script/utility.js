function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden')
}


function showElementById(elementId){
    const element =document.getElementById(elementId)
    element.classList.remove('hidden')
}

function addBgColor(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('bg-orange-600')
}
function removeBgColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-600')
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvuxyz'
    const alphabets=alphabetString.split('')
    // console.log(alphabets);

    const randomNum = Math.round(Math.random()*25)
    // console.log(randomNum);

    const Alphabet = alphabets[randomNum]
    // console.log(Alphabet);

    return Alphabet
    
}