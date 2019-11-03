const someObject=Object.create();
function findInPrototype(someProperty,someObject){
    for ( let key in someObject){
        if(!someObject.hasOwnProperty(key)) {
            if(key===someProperty){
            return someObject[someProperty] 
        }
    }  
}
module.exports=findInPrototype;