let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

const obj = {
    btn_0: 0,
    btn_1: 1,
    btn_2: 2,
    btn_3: 3,
    btn_4: 4,
    btn_5: 5,
    btn_6: 6,
    btn_7: 7,
    btn_8: 8,
    btn_9: 9,
}

function clickBtnId(clicked) {
    inputWindow.value += obj[clicked];
}

const objOperate = {
    btn_summ: 'summ',
    btn_minus: 'minus',
    btn_proiz: 'proiz',
    btn_dell: 'dell',
    btn_square: 'square'
}

function clikOperate(clicked) {
    lastOperand = parseInt(inputWindow.value)
    operation = objOperate[clicked];
    inputWindow.value = '';
}


document.querySelector('#btn_result').addEventListener('click', function() {
    if (operation === 'summ') {
        const result = parseFloat(lastOperand) + parseFloat(inputWindow.value);
        lastOperand = 0;
        operation = null;
        inputWindow.value = parseFloat(result);
        console.log(result);             
    }

    if (operation === 'minus') {
        result = parseFloat(lastOperand) - parseFloat(inputWindow.value)
        lastOperand = 0;
        operation = null;
        inputWindow.value = parseFloat(result);
                
    }
    if (operation === 'proiz') {
        result = parseFloat(lastOperand) * parseFloat(inputWindow.value)
        lastOperand = 0;
        operation = null;
        inputWindow.value = parseFloat(result);
                
    }
    if (operation === 'dell') {
        result = parseFloat(lastOperand) / parseFloat(inputWindow.value);
        lastOperand = 0;
        operation = null;
        inputWindow.value = parseFloat(result);
        
                
    }
    if (operation === 'square') {
        result = Math.sqrt(lastOperand);
        lastOperand = 0;
        operation = null;
        inputWindow.value = parseFloat(result);
                
    }
})

