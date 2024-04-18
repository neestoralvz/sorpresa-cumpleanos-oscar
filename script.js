const giftBox = Math.floor(Math.random() * 9) + 1;
const message = document.getElementById('message');

function checkGift(boxNumber) {
    if (boxNumber === giftBox) {
        message.textContent = '¡Felicidades! ¡Encontraste el regalo especial!';
        message.style.color = '#ff6f00';
    } else {
        message.textContent = 'Sigue buscando. ¡No te rindas!';
        message.style.color = '#000';
    }
}