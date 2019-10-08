/* eslint-disable no-param-reassign */
function createLowerCamelCaseString(someString){
    if(!someString) return someString
    someString=someString.toLowerCase();
    for (let i=0; i<someString.length;i++){
        if (someString[i-1]===' ') someString=someString.slice(0,i-1)+someString[i].toUpperCase()+someString.slice(i+1)
    }
    return someString[0].toLowerCase()+someString.slice(1)
}
module.exports=createLowerCamelCaseString;