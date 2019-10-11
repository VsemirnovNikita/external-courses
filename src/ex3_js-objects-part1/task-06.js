function doDeepCopy(someObject){
    let copy ={}
    for (let key in someObject){
        if((typeof someObject[key] === "object")&& !(Array.isArray(someObject))) copy[key]=doDeepCopy(someObject[key])
        else copy[key]=someObject[key];   
    }
    return copy;
}
module.exports=doDeepCopy;