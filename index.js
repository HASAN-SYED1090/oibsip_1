// Function to update the display
function updateDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression and display the result
function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
}

// Add event listeners to the buttons
document.querySelectorAll('input[type=button]').forEach(button => {
    button.addEventListener('click', () => {
        switch (button.value) {
            case 'AC':
                clearDisplay();
                break;
            case '=':
                calculate();
                break;
            case 'X':
                let value = "*"
                updateDisplay(value);
                break;
            default:
                updateDisplay(button.value);
                break;
        }
    });
});
