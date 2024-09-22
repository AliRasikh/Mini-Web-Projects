const display = document.getElementById('display');
display.innerHTML = '';

function appendToDisplay(input) {
    // console.log(`append to display ${input}`);
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
    display.innerHTML = display.innerHTML.slice(0, -1);     
}



function add() { 
    // window.alert("add");
    // console.log("add");
    
    const para = document.createElement("p");	
    console.log(para);
    const node = document.createTextNode("This is new.");
    para.appendChild(node);

    para.style.cssText = `
        color: red;
        font-size: 20px;
        font-weight: bold;
        background-color: yellow;
    `;

    const placeholder = document.getElementById("placeholder"); 
    placeholder.appendChild(para);
       
}





