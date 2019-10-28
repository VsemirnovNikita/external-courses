/* eslint-disable no-param-reassign */
function createUpperCaseString(someString){
    if(!someString) return someString
    someString=someString[0].toUpperCase()+someString.slice(1)
    for (let i=0; i<someString.length;i++){
        if (someString[i-1]===' ') someString=someString.slice(0,i)+someString[i].toUpperCase()+someString.slice(i+1);
    }
    return someString
}
module.exports=createUpperCaseString;