let result = document.querySelector('.calculator__display');
let innerResult = document.querySelector('.calculator__InnerResult');
let updateVal = '';
let total = '';
let lastval = '';
let modulevalu = '';
let rootVal = '';
let powerval = '';
let operator = ['*', '%', '-', '/', '.', '+', '^', '√'];
result.textContent = '0';
function getResult() {
  let result = document.querySelector('.calculator__display').innerHTML;
  return result;
}
function setResult(value) {
  let result = document.querySelector('.calculator__display');
  result.innerHTML = value;
}

function calsi(data) {
  let newval = data.value;
  setResult(newval);

  lastval = updateVal.charAt(updateVal.length - 1);

  if (newval === '%' || lastval === '%') {
    if (updateVal.split('').slice(0, 3).includes('+')) {
      let moduleFirstVal = updateVal
        .split(/[+*/-]+/)
        .join('+')
        .slice(0, 3);
      let modResult = eval(moduleFirstVal);
      let resMod = '';
      resMod = (modResult * updateVal.slice(-3)) / 100;
      total = modResult + resMod;
    } else if (updateVal.split('').slice(0, 3).includes('-')) {
      let moduleFirstVal = updateVal
        .split(/[+*/-]+/)
        .join('-')
        .slice(0, 3);
      let modResult = eval(moduleFirstVal);
      let resMod = '';
      resMod = (modResult * updateVal.slice(-3)) / 100;
      total = modResult + resMod;
    } else if (updateVal.split('').slice(0, 3).includes('*')) {
      let moduleFirstVal = updateVal
        .split(/[+*/-]+/)
        .join('*')
        .slice(0, 3);

      let modResult = eval(moduleFirstVal);
      let resMod = '';
      resMod = (modResult * updateVal.slice(-3)) / 100;
      total = modResult + resMod;
    } else if (updateVal.split('').slice(0, 3).includes('/')) {
      let moduleFirstVal = updateVal
        .split(/[+*/-]+/)
        .join('/')
        .slice(0, 3);

      let modResult = eval(moduleFirstVal);
      let resMod = '';
      resMod = (modResult * updateVal.slice(-3)) / 100;
      total = modResult + resMod;
    } else if (newval === '%') {
      total = total / 100;
      innerResult.innerResult = total;
    }
  } else if (updateVal === '√' || newval === '√' || updateVal.includes('√')) {
    const totalVal = updateVal + newval;
    const rootIndex = totalVal.split('').findIndex((char) => char === '√');
    const opIndex = totalVal
      .split('')
      .findIndex((char) => operator.slice(0, -1).includes(char));
    const lastIndex = totalVal.length;
    rootVal = totalVal.slice(rootIndex + 1, opIndex > -1 ? opIndex : lastIndex);
    let firstVal = updateVal.split('√')[0] || 1;
    let lastVal = updateVal.split('√')[1] + newval;
    total = Math.sqrt(rootVal) * firstVal;
    if (opIndex > -1 && !operator.includes(totalVal.charAt(lastIndex - 1))) {
      const ttl = total.toString();
      const abc = totalVal.slice(opIndex, lastIndex);
      const eq = ttl + abc;
      powerval = Math.pow(rootVal, newval);
      total = eval(eq);
    }
    innerResult.innerHTML = total;
  }
  if (lastval === '^' || updateVal === '^') {
    total = Math.pow(total, newval);

    innerResult.innerHTML = total;
    updateVal = total;
    setResult(updateVal);
    return;
  } else if (
    updateVal.length === 1 &&
    ['*', '/', '%', '+', '^'].includes(updateVal)
  ) {
    updateVal.substring(0, updateVal.length - 1);
    updateVal = '';
    setResult(updateVal);
  } else if (updateVal.length === 1 && updateVal.toString().includes('.')) {
    updateVal = '0.';
    setResult(updateVal);
  }

  if (operator.includes(lastval) && operator.includes(newval)) {
    let updateOprator = updateVal.substring(0, updateVal.length - 1) + newval;
    updateVal = updateOprator;
    setResult(updateVal);
  } else {
    result.innerHTML = updateVal += newval;

    if (!operator.includes(updateVal.slice(-1))) {
      total = eval(updateVal);
    }
    innerResult.innerHTML = total.toString().includes('.')
      ? total.toFixed(3)
      : total.toString();

    if (lastval === '%') {
      let newmod = modulevalu * newval;
      innerResult.innerHTML = newmod;
    }
  }
}

// Equal to Functionality
function equalsTo() {
  innerResult.innerHTML = total;
  result.innerHTML = '';
  updateVal = total.toString();
  console.log(updateVal, 'totalyudsn');
  setResult(updateVal);
}

//Delete functionality
function remove() {
  if (innerResult != '') {
    let deleteval = result.innerHTML.slice(0, result.innerHTML.length - 1);
    result.innerHTML = deleteval?.toString() || '0';
    if (!operator.includes(deleteval.slice(-1))) {
      total = eval(deleteval);
    }

    innerResult.innerHTML = total?.toString() || '';
    updateVal = deleteval;
  }
}

//remove Funtionality
function removeAll() {
  updateVal = '';
  result.innerHTML = '0';
  innerResult.innerHTML = '';
  total = '';
}
