let result = document.querySelector('.calculator__display');
let innerResult = document.querySelector('.calculator__InnerResult');
let updateVal = '';
let total = '';

function calsi(data) {
    // let number = data.dataset.number;
    // let operator = data.dataset.operator;
    let currentValue = '';
    let newval = data.value;
    let y = result.innerHTML;
    let lastval = y.slice(-1);
    if (['*', '+', '-', '/', '.', '%'].includes(lastval) && ['*', '+', '-', '/', '.', '%'].includes(newval)) {
        y = y.replace(lastval, newval);
        result.innerHTML = y

    }
     else {
        currentValue = result.innerHTML += newval;
        updateVal = currentValue;
    }
    if (!['*', '+', '-', '/', '%'].includes(updateVal.slice(-1))) {
        resultDiv();
    }
}

function resultDiv() {
    var str = updateVal;
    console.log(str,'str');
    var regex = /([0-9]+\.?[0-9]*|\.[0-9]+)/g;
    var numbers = str.match(regex);
    console.log(numbers,'numbers');
    let opregex = /([+-\/*%])/g;
    let opratervalue = str.match(opregex);
    // let splitVal = updateVal.split('');
    let array1 = ['-', '*', '/', '+', '%','√'];
    let finddoprater = opratervalue.filter(myele => array1.includes(myele));
    
  
    finddoprater.forEach((symbol, index) => {
        console.log(symbol, 'symbol');

        if (index === 0) {
            
            total = eval(numbers[0] + symbol + numbers[1]);
            innerResult.innerHTML = '='+ Math.ceil(total);
             result.innerHTML = updateVal;
            console.log(total, 'firstval');
        } else {
            // console.log(symbol,'11111',typeof number[0]);
             total = eval(total + symbol + numbers[index + 1]);
            // result.innerHTML = total;
            innerResult.innerHTML = '='+ Math.ceil(total);
            // result.innerHTML = total;
            console.log(total, 'nextline total');
        }
    });
}

function equalsTo() {
    result.innerHTML = total;
}

function remove() {
    // let displayVal = updateVal;
    result.innerHTML = updateVal.slice(0, result.innerHTML.length - 1);
    innerResult.innerHTML = total;
    // innerResult.innerHTML = updateVal.slice(0,innerResult.innerHTML.length -1)
    // innerResult.innerHTML = total.slice(0, innerResult.innerHTML.length - 1);
}

function removeAll() {
    result.innerHTML = '';
    innerResult.innerHTML = '';
}
