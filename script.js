// Animación de confeti
function showConfetti() {
    const confettiCanvas = document.getElementById('confetti-canvas');
    const confettiContext = confettiCanvas.getContext('2d');
    const confettiPieces = [];

    const colors = ['#ff6f00', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'];

    class ConfettiPiece {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.angle = Math.random() * Math.PI * 2;
            this.speed = Math.random() * 2 + 1;
            this.radius = Math.random() * 3 + 2;
        }

        update() {
            this.angle += 0.01;
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;
        }

        draw() {
            confettiContext.beginPath();
            confettiContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            confettiContext.fillStyle = this.color;
            confettiContext.fill();
            confettiContext.closePath();
        }
    }

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * confettiCanvas.width;
            const y = Math.random() * confettiCanvas.height;
            const color = colors[Math.floor(Math.random() * colors.length)];
            confettiPieces.push(new ConfettiPiece(x, y, color));
        }
    }

    function updateConfetti() {
        confettiContext.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiPieces.forEach(piece => {
            piece.update();
            piece.draw();
        });
        requestAnimationFrame(updateConfetti);
    }

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    createConfetti();
    updateConfetti();
}

// Evento de clic en el botón de sorpresa
const surpriseButton = document.getElementById('surprise-button');
surpriseButton.addEventListener('click', showConfetti);

// Evento de redimensionamiento para ajustar el tamaño del canvas de confeti
window.addEventListener('resize', function() {
    const confettiCanvas = document.getElementById('confetti-canvas');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
});