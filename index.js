const textareaEl = document.querySelector(".textarea");
const wordNumberEl = document.querySelector(".stat__number--words");
const characterNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");



textareaEl.addEventListener('input', () => {
    // Obtener largo de string de lo ingresado en el textarea
    const lengthOfCharacters = textareaEl.value.length;
    
    // Asignar valores 
    const wordCount = textareaEl.value.split(' ').length;
    wordNumberEl.textContent = wordCount;

    const characterCount = textareaEl.value.length;
    characterNumberEl.textContent = characterCount;

    const twitterTextCount = 280 - lengthOfCharacters;
    twitterNumberEl.textContent = twitterTextCount;

    const facebookTextcount = 2200 - lengthOfCharacters;
    facebookNumberEl.textContent = facebookTextcount;

    if (twitterTextCount < 0) {
        twitterNumberEl.style.color = 'red';
    }

    if (facebookTextcount < 0) {
        facebookNumberEl.style.color = 'red';
    }

}) 
