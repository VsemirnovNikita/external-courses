function Calculator(){
    result=0;
    previousResult=0;

function getResult(){
    return this.result;
}
function reset(){
    this.previousResult=this.result;
    this.result=0;
}
function add(addendum=0){
    this.result+=addendum;
}
function subtract(subtrahend=0){
    this.result-=subtrahend
}
function divide (divisor=1){
    this.result/=divisor;
}
function multiply (multiplier=1){
    this.result*=multiplier;
}
}
module.exports=Calculator;