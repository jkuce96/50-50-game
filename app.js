const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const skorespan = document.getElementById('skorespan');

let score = 0;

function spravnaKarta() {
    const randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber === 0) {
        console.log('true');
        score++;
        skorespan.textContent = score;
        if (score >= 3) {
            const image = document.querySelector(".obrazek");
            
            document.querySelector(".container").style.display = "none";
            image.style.display = "flex";
        }
} else {
    console.log('false');
    skorespan.textContent = 0;
    score = 0;
    alert("ŠPATNĚ, ZNOVU");
    
}};

card1.addEventListener('click', spravnaKarta);
card2.addEventListener('click', spravnaKarta);




