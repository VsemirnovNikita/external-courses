function ChooseNumberOrString(argument){
    let argumentType;
    if (typeof (argument)==='string') argumentType='string'
    else {
        if (typeof (argument)==='number') argumentType='number'
        else argumentType=undefined;
    }
 return argumentType;
}
module.exports=ChooseNumberOrString;