// variables
const root = document.querySelector('#root');
const inputScreen = document.querySelector('.input-screen');
const btns = Array.from(document.getElementsByClassName('btn'));

btns.map(btn => {
    btn.addEventListener('click', e => {
        btn.classList.add('active');
        switch (e.target.innerText) {
            case 'C':
                inputScreen.value = "";
                break;
            case '=':
                try {
                    inputScreen.value = eval(inputScreen.value);
                } catch {
                    inputScreen.value = "Error"
                }
                break;
            case '←':
                if (inputScreen.value) {
                    inputScreen.value = inputScreen.value.slice(0, -1);
                }
                break;
            default:
                if (inputScreen.value === "Error") {
                    inputScreen.value = "";
                }
                inputScreen.value += e.target.innerText;
        }
    })
})