const inputBox = document.getElementById('inputBox');
const keys = document.querySelectorAll('.calculator-keys .button');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.textContent;

        if (value === 'C') {
            inputBox.value = '';
        } else if (value === '=') {
            try {
                inputBox.value = eval(inputBox.value);
            } catch (error) {
                inputBox.value = 'Error';
            }
        } else {
            inputBox.value += value;
        }
    });
});

