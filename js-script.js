// Clear button

const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    window.location.reload();
})


function by16() {

    const container = document.getElementById('container');

    for(let i = 1; i <= 256; i++ ) {
        const div = document.createElement('div');
        div.classList.add('gridBlock');
        container.appendChild(div);
    }

    const grid = document.querySelectorAll('.gridBlock');

    grid.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => {
            grid.style.backgroundColor = 'black';
        })
    })
}

function by32() {

    const container = document.getElementById('container');

    for(let i = 1; i <= 1024; i++ ) {
        const div = document.createElement('div');
        div.classList.add('gridBlock32');
        container.appendChild(div);
    }

    const grid = document.querySelectorAll('.gridBlock32');

    grid.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => {
            grid.style.backgroundColor = 'black';
        })
    })
}

function by64() {

    const container = document.getElementById('container');

    for(let i = 1; i <= 4096; i++ ) {
        const div = document.createElement('div');
        div.classList.add('gridBlock64');
        container.appendChild(div);
    }

    const grid = document.querySelectorAll('.gridBlock64');

    grid.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => {
            grid.style.backgroundColor = 'black';
        })
    })
}

function by128() {

    const container = document.getElementById('container');

    for(let i = 1; i <= 16384; i++ ) {
        const div = document.createElement('div');
        div.classList.add('gridBlock128');
        container.appendChild(div);
    }

    const grid = document.querySelectorAll('.gridBlock128');

    grid.forEach(grid => {
        grid.addEventListener('mouseenter', (e) => {
            grid.style.backgroundColor = 'black';
        })
    })
}

const by16btn = document.getElementById('by16btn');
by16btn.addEventListener('click', by16);

const by32btn = document.getElementById('by32btn');
by32btn.addEventListener('click', by32);

const by64btn = document.getElementById('by64btn');
by64btn.addEventListener('click', by64);

const by128btn = document.getElementById('by128btn');
by128btn.addEventListener('click', by128);