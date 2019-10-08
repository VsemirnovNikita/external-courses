function reverseString(someString){
    let newString='';
    for (let i= someString.length-1; i >= 0;i--){
        newString=newString+someString[i];
    }
    return newString
}
module.exports=reverseString;