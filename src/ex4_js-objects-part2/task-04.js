 function changeToUpperCase(someString){
    if (!someString) return someString
    return someString[0].toUpperCase()+someString.slice(1)
 }
 module.exports=changeToUpperCase;