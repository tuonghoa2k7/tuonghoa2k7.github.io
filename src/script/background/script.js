const container = document.getElementById('web-background');

function createLine() {
    const line = document.createElement('div');
    line.classList.add('line');

    const y = Math.random() * window.innerHeight;
    const width = 64 + Math.random() * 256;
    const duration = 2 + Math.random() * 8;

    line.style.top = `${y}px`;
    line.style.width = `${width}px`;
    line.style.animationDuration = `${duration}s`;

    container.appendChild(line);

    setTimeout(() => line.remove(), duration * 1000);
}

setInterval(createLine, 150);