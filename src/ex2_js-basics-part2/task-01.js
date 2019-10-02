function chooseNumberOrString(argument){
    let argumentType;
    if (typeof argument==='string') argumentType='string'
    else {
        if ((typeof argument==='number')&&(!argument.isNan)) argumentType='number';
    }
 return argumentType;
}
module.exports=chooseNumberOrString;