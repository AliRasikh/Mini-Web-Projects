function multiply() {
    let a = 4;
    let b = 2;
    console.log(a * b);
}


function add(callback) {
    let a = 4;
    let b = 2;
    let sum = a + b;
    console.log(sum);
    callback();
}


add(multiply);
