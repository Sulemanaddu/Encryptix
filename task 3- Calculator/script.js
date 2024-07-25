let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendCharacter(char) {
    if (displayValue === '0') {
        displayValue = char;
    } else {
        displayValue += char;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}
