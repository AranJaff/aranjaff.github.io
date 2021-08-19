
// create objects [in java mood ;)] 
const grid = document.querySelector(".grid")
const btnBlack = document.querySelector(".btn1")
const btnGray = document.querySelector(".btn2")
const btnRGB = document.querySelector(".btn3")
const btnReset = document.querySelector(".btn4")
const btnContainer = document.querySelector(".buttons")

// add buttons(children) to btnContainer(Parent)
btnGray.textContent = "Gray";
btnContainer.appendChild(btnGray);

btnBlack.textContent = "Black";
btnContainer.appendChild(btnBlack);

btnRGB.textContent = "RGB";
btnContainer.appendChild(btnRGB);

btnReset.textContent = "Reset"; 
btnContainer.appendChild(btnReset);

//default size
let size = 16;

function addElement(size) {
    reset();
    for (let i=0; i<size*size; i++) {
        const div = document.createElement('div');
        div.classList.add("item");
        grid.style.gridTemplateColumns = `repeat(${size}, auto)`;
        grid.appendChild(div);
    }
}

function grayColor() {
    const items = document.querySelectorAll(".item");

    items.forEach(item => item.addEventListener('mouseover', () => {
        let randNumber = Math.floor(Math.random() * 255);
        item.style.background = `rgb(${randNumber},${randNumber},${randNumber})`;
    }));     
}

function blackColor() {
    const items = document.querySelectorAll(".item");
    
    items.forEach(item => item.addEventListener('mouseover', () => {
        let randNumber = Math.floor(Math.random() * 255);
        item.style.background = 'black';
    }));     
}

function rgbColor() {
    const items = document.querySelectorAll(".item");

    items.forEach(item => item.addEventListener('mouseover', () => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        item.style.background = `rgb(${R},${G},${B})`;
    }));     
}

function reset () {
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}

function reSize() {
    let slider = document.getElementById("myRange");
    addElement(size);
    slider.addEventListener("change", function() {
        size = this.value;
        let label = document.querySelector(".label");
        label.textContent = `${size}*${size}`;
        addElement(size);

    })

}
reSize()

// event listeners
btnBlack.addEventListener('click', blackColor);
btnGray.addEventListener('click', grayColor);
btnRGB.addEventListener('click', rgbColor);
btnReset.addEventListener('click', () => {
    reset();
    addElement(size);
});
