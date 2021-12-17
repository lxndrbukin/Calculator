// Variables
const root = document.querySelector('#root');
const inputScreen = document.querySelector('.input-screen');
const btns = Array.from(document.getElementsByClassName('btn'));

// Mapping through buttons to add each an event listener
btns.map(btn => {
    btn.addEventListener('click', e => {
        switch (e.target.innerText) {
            // Clearing the input value when clicking "C"
            case 'C':
                inputScreen.value = "";
                break;
            // Calculating the result on the input screen when clicking "="
            case '=':
                try {
                    inputScreen.value = eval(inputScreen.value);
                } catch {
                    inputScreen.value = "Error"
                }
                break;
            // Removing one digit/symbol from the input when clicking "←"
            case '←':
                if (inputScreen.value) {
                    inputScreen.value = inputScreen.value.slice(0, -1);
                }
                break;
            // Adding the default buttons to the input field
            default:
                if (inputScreen.value === "Error") {
                    inputScreen.value = "";
                } else if (inputScreen.value.startsWith("0")) {
                    inputScreen.value = "";
                }
                inputScreen.value += e.target.innerText;
        }
    })
})