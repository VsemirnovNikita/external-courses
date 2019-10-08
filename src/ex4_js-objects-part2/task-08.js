/* eslint-disable no-param-reassign */
function createLowerCamelCaseString(someString){
    if(!someString) return someString
    someString=someString[0].toLowerCase()+someString.slice(1)
    for (let i=0; i<someString.length;i++){
        
        if (someString[i-1]===' ') someString=someString.slice(0,i-1)+someString[i].toUpperCase()+someString.slice(i+1)
        else someString=someString.slice(0,i)+someString[i].toLowerCase()+someString.slice(i+1);
    }
    return someString
}
module.exports=createLowerCamelCaseString;