const display = document.getElementById('display');
let currentInput = '0';
let resetDisplay = false;

function updateDisplay() {
    display.textContent = currentInput;
}

function appendCharacter(char) {
    if (currentInput === '0' || resetDisplay) {
        currentInput = char;
        resetDisplay = false;
    } else {
        currentInput += char;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function backspace() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        // Substitui os símbolos visuais para os operadores aceitos pelo JavaScript
        let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        
        // Executa o cálculo de forma segura
        let result = eval(expression);
        
        currentInput = String(result);
        resetDisplay = true;
        updateDisplay();
    } catch (error) {
        currentInput = 'Erro';
        resetDisplay = true;
        updateDisplay();
    }
}
