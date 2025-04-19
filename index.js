function add() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = n1 + n2;
}

function subtract() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = n1 - n2;
}

function divide() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = n1 / n2;
}

function multiply() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = n1 * n2;
}

function clearResult() {
    document.getElementById("result").value = "";
}