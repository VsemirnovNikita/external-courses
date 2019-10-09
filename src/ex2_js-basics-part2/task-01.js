function chooseNumberOrString(argument){
    let argumentType;
    if ((typeof argument==='number')||!isNaN(argument)) argumentType='number'
    else argumentType= undefined;
    if (typeof argument==='string') argumentType='string';
    if (!((typeof argument==='number')||(typeof argument==='string'))) argumentType=undefined;
 return argumentType;
}
module.exports=chooseNumberOrString;