function addition(firstNumber,secondNumber){
    if(isNaN(firstNumber)||isNaN(secondNumber) ) return NaN;
    let summ = firstNumber+secondNumber;
    return +summ.toFixed(3);
}
module.exports=addition;