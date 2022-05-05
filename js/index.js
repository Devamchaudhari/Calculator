let result = document.querySelector('.calculator__display');
let innerResult = document.querySelector('.calculator__InnerResult');
let updateVal = '';
let total = '';
let lastval='';
let modulevalu ="";
let rootVal='';
let powerval='';
// let operator = ['*', '+', '-', '/', '.', '%','^','√'];
let operator = ['*', '%', '-', '/', '.', '+','^','√'];
// let modOp = ['*','-', '/', '+'];
result.textContent = '0';
function getResult() {
    let result = document.querySelector('.calculator__display').innerHTML
    return result;
}
function setResult(value) {
    let result = document.querySelector('.calculator__display');
    result.innerHTML = value;
}

function calsi(data) {
    let newval = data.value;
    setResult(newval)

    lastval = updateVal.charAt(updateVal.length - 1);
    console.log(lastval,'lastval');
    // if(operator.includes('')){
    //     console.log('inn');
    // }
    
    if(newval === '%' || lastval=== '%'){
    // debugger
        // console.log('update value find operator :>> ', updateVal.split('').includes(modOp) === '+');
        console.log('update value find operator :>> ', updateVal.split('').includes('+'));
        if(updateVal.split('').slice(0, 3).includes('+')){

            console.log('update split value plus :>> ',  updateVal.split(/[+*/-]+/));
            
            console.log('update split value plus :>> ',  updateVal.split(/[+*/-]+/).join('+').slice(0, 3));
            
            let moduleFirstVal = updateVal.split(/[+*/-]+/).join('+').slice(0, 3);
            
             console.log('update eval :>> ', eval(moduleFirstVal));
               let modResult = eval(moduleFirstVal);
               let resMod='';
               resMod = (modResult * updateVal.slice(-3)) / 100;
               total = modResult + resMod;
        }
        else
        if(updateVal.split('').slice(0, 3).includes('-')){

            console.log('update split value minus:>> ',  updateVal.split(/[+*/-]+/));
            
            console.log('update split value minus:>> ',  updateVal.split(/[+*/-]+/).join('-').slice(0, 3));
            
            let moduleFirstVal = updateVal.split(/[+*/-]+/).join('-').slice(0, 3);
            
             console.log('update eval :>> ', eval(moduleFirstVal));
               let modResult = eval(moduleFirstVal);
               let resMod='';
               resMod = (modResult * updateVal.slice(-3)) / 100;
               total = modResult + resMod;
        }
        // else if(){

        // }
 
        // console.log('newval :>> ', newval);
        // // console.log('update split value :>> ',  updateVal.split(/[+*/-]+/).reverse().join().substring(2));
        // console.log('update split value :>> ',  updateVal.split(/[+*/-]+/).join('-').slice(0, 3));
        // // let moduleFirstVal = updateVal.split(-1);
        // // let moduleFirstVal =   updateVal.split(/[+*/-]+/).reverse().join('+').substring(2);
        // let moduleFirstVal =   updateVal.split(/[+*/-]+/).join('-').slice(0, 3);
        // console.log('update eval :>> ', eval(moduleFirstVal));
        //  let modResult = eval(moduleFirstVal);
        //  let resMod='';
        //  resMod = (modResult * updateVal.slice(-1)) / 100;
        //  total = modResult + resMod;

        // console.log('total vlaue :>> ', typeof(total));
        // console.log('last modulo value :>> ', lastval);
      
    }

    // else if(updateVal=== '%' && lastval=== '%'){
    //         total = total / 100;
    //         innerResult.innerResult  = total;

    // }
    // else
    // if(updateVal.includes('(') && updateVal.includes(')') ){
    //     total = eval(updateVal);
    //     console.log('total value :>> ', total);
    //     innerResult.innerHTML = total;
    //  }
     else if ((updateVal === '√' || newval === '√') || updateVal.includes('√')) {
    
        const totalVal = updateVal + newval;
        // console.log("updated val : ", totalVal);
        const rootIndex = totalVal.split('').findIndex(char => char === "√")
        console.log(rootIndex);
        const opIndex = totalVal.split('').findIndex(char => operator.slice(0, -1).includes(char));
        console.log("opIndex : ", opIndex);
        const lastIndex = totalVal.length;
        rootVal = totalVal.slice(rootIndex + 1, opIndex > -1 ? opIndex : lastIndex)

        console.log("rootVal : ", rootVal);
        // console.log('new value :>> ', newval);
        // console.log(' last value:>> ', lastval);
        let firstVal = updateVal.split('√')[0] || 1;
        let lastVal = updateVal.split('√')[1] + newval;
        // console.log('totalvalue :>> ', updateVal.split('√')[1] + newval);
        total = Math.sqrt(rootVal) * firstVal;
        if (opIndex > -1 && !operator.includes(totalVal.charAt(lastIndex - 1))) {
            const ttl = total.toString();
            const abc = totalVal.slice(opIndex, lastIndex);
            const eq = ttl + abc;
            console.log(eq);
            console.log('rootVal :>> ', rootVal);
            console.log(Math.pow(rootVal , newval));
            powerval = Math.pow(rootVal, newval);
            total = eval(eq)
        }
        innerResult.innerHTML = total;
        // } else if ((updateVal !== '√' || newval !== '√')) {
        //     total = eval(updateVal.slice(0, updateVal.length - 1)) * Math.sqrt(newval);
        //     innerResult.innerHTML = total;
    } 
//else
    
// if ((updateVal==='√' || newval === '√')) {    
//         console.log('new value :>> ',newval );
//         console.log(' last value:>> ', lastval );
//         total =  Math.sqrt(newval);
//         console.log('totalvalue :>> ', total );
//         innerResult.innerHTML= total;
//     }
//     // else
//     // if((updateVal !=='√' || newval !== '√')){
//     //     total = eval(updateVal.slice(0,updateVal.length-1)) * Math.sqrt(newval);
//     //     innerResult.innerHTML= total;
//     // }
    // else
    if(lastval === '^' || updateVal === '^'){
        console.log('last val :>> ', lastval );
        console.log('update val :>> ', updateVal );
        total= Math.pow(total,newval);
        console.log('new val :>> ',newval);

        // console.log('total root val :>> ',total );
        
        innerResult.innerHTML = total;
         updateVal = total;
         console.log('update value :>> ', updateVal);
        setResult(updateVal);
         return
    }
    else
    if(updateVal.length === 1 && ['*','/','%','+','^'].includes(updateVal)){
        updateVal.substring(0,updateVal.length -1);
        updateVal = '';
        setResult(updateVal);                                   
        // console.log('inn');
        
    }else
    if(updateVal.length === 1 && updateVal.toString().includes('.')) {
    //    console.log('inn');
        
       updateVal = '0.';
        setResult(updateVal);
    }
    
    if (operator.includes(lastval) && operator.includes(newval)) {
      console.log('last value op :>> ',lastval );
      console.log('new value op :>> ',newval );
      
      let updateOprator = updateVal.substring(0,updateVal.length -1) + newval;
      updateVal = updateOprator;
      setResult(updateVal);
      
    }
    
    else{
        // result.innerHTML = updateVal += newval;
     result.innerHTML = updateVal += newval;

        console.log(updateVal,'update val---');
        if((!operator.includes(updateVal.slice(-1)))){
        total = eval(updateVal);
        }
        innerResult.innerHTML =  total.toString().includes('.') ? total.toFixed(3) : total.toString();
        // setResult(updateVal);    
        if(lastval ==='%'){
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
    console.log(updateVal,'totalyudsn');
     setResult(updateVal);
}

//Delete functionality
function remove() {
  
    if(innerResult != ''){
        let deleteval = result.innerHTML.slice(0, result.innerHTML.length - 1);
        result.innerHTML = deleteval?.toString()|| '0';
        if((!operator.includes(deleteval.slice(-1)))){
            total = eval(deleteval);
        }

        innerResult.innerHTML =  total?.toString()|| '';
        updateVal=deleteval;
    }
}

//remove Funtionality
function removeAll() {
    updateVal = '';
    result.innerHTML = '0';
    innerResult.innerHTML = '';
    total = '';
}