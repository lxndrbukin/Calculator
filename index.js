// variables
const root = document.querySelector('#root');
const calculator = document.createElement('div');
const input = document.createElement('input');
const btnsContainer = document.createElement('div');
let btn;
const allBtns = document.getElementsByClassName('btn');
const btnArray = ["C", "/", "%", 1, 2, 3, "*", 4, 5, 6, "+", 7, 8, 9, "-", ".", 0, "="];


//render the Calculator
calculator.classList.add('calculator');
root.appendChild(calculator);

input.classList.add('input-screen');
btnsContainer.classList.add('btns');

const renderCalculator = _ => {
    //render input screen
    calculator.appendChild(input);
    //render buttons
    btnArray.forEach(button => {
        btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = button;
        btn.textContent === "C" ? btn.classList.add('clear') : btn.classList.remove('clear');
        btn.textContent === "=" ? btn.classList.add('calc') : btn.classList.remove('calc');
        btn.textContent === "C" || btn.textContent === "=" ? btn.classList.add('wide') : btn.classList.remove('wide');
        btnsContainer.appendChild(btn);
    });
    calculator.appendChild(btnsContainer);
    //adding event listener to display button value in input field
    for (let i = 0; i < allBtns.length; i++) {
        if (allBtns[i].textContent !== "=" && allBtns[i].textContent !== "C" && allBtns[i].textContent !== "%") {
            allBtns[i].addEventListener('click', () => {
                input.value+=allBtns[i].textContent;
            })
        } else if (allBtns[i].textContent === "C") {
            allBtns[i].addEventListener('click', () => {
                input.value = "";
            })
        }
    }
    //adding event listener to calc the input field value
    const calc = document.querySelector('.calc');
    calc.addEventListener('click', () => {
        let x = input.value;
        let y = eval(x);
        input.value = y;
    })
}

//invoke function to render the Calculator
renderCalculator();