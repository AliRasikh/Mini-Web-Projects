const display = document.getElementById('display');
display.innerHTML = '';

function appendToDisplay(input) {
    console.log(`append to display ${input}`);
    display.innerHTML += input;
}

function clearDisplay() {
    display.innerHTML = '';
}

function calculate() {
    if(display.innerHTML === '') {
        display.innerHTML = '';
        return;
    }

    console.log("calculate");
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (error) {
        console.error(error);
        display.innerHTML = 'Error';
    }
}

backspace = () => {
    console.log("backspace");
    display.innerHTML = display.innerHTML.slice(0, -1);     
}


