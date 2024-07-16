const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById('btn');
const numberDisplay = document.querySelector(".number");

btn.addEventListener("click", function() {
    let number = Math.random() < 0.5 ? '98' : '97';
    // Append 8 more random digits to make it a 10-digit number
    for (let i = 0; i < 8; i++) {
        number += numbers[getRandomNumber()];
    }
    numberDisplay.textContent = number;
});

function getRandomNumber() {
    return Math.floor(Math.random() * numbers.length);
}
