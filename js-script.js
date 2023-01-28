function buttonConfig() {

    const clear = document.getElementById('clear')
    clear.addEventListener('click', () => {
        const grid = document.querySelectorAll(`.pixel`);
        grid.forEach(grid => grid.remove())
    })

    const by16btn = document.getElementById('by16btn');
    by16btn.addEventListener('click', by16);

    const by32btn = document.getElementById('by32btn');
    by32btn.addEventListener('click', by32);

    const by64btn = document.getElementById('by64btn');
    by64btn.addEventListener('click', by64);

    const by128btn = document.getElementById('by128btn');
    by128btn.addEventListener('click', by128);
}

function randomColor() {return Math.floor(Math.random() * 255);}

function by16() {

    for (let i = 1; i <= 256; i++) {
        const div = document.createElement('div');
        div.classList.add('gridBlock', 'pixel');
        container.appendChild(div);
    }

    const grid = document.querySelectorAll('.gridBlock');
    const random = document.querySelector('.random');

    grid.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => {
            if (random.checked) grid.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            else grid.style.backgroundColor = 'black';
        })
    })
}

function by32() {

    for (let i = 1; i <= 1024; i++) {
        const div = document.createElement('div');
        div.classList.add('gridBlock32', 'pixel');
        container.appendChild(div);
    }

    const grid = document.querySelectorAll('.gridBlock32');
    const random = document.querySelector('.random');

    grid.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => {
            if (random.checked) grid.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            else grid.style.backgroundColor = 'black';
        })
    })
}

function by64() {

    for (let i = 1; i <= 4096; i++) {
        const div = document.createElement('div');
        div.classList.add('gridBlock64', 'pixel');
        container.appendChild(div);
    }

    const grid = document.querySelectorAll('.gridBlock64');
    const random = document.querySelector('.random');

    grid.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => {
            if (random.checked) grid.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            else grid.style.backgroundColor = 'black';
        })
    })
}

function by128() {

    for (let i = 1; i <= 16384; i++) {
        const div = document.createElement('div');
        div.classList.add('gridBlock128', 'pixel');
        container.appendChild(div);
    }

    const grid = document.querySelectorAll('.gridBlock128');
    const random = document.querySelector('.random');

    grid.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => {
            if (random.checked) grid.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            else grid.style.backgroundColor = 'black';
        })
    })
}

buttonConfig();
