function doDeepCopy(someObject){
    let copy = Object.assign({},someObject)
    for (let key in someObject){
        if(someObject[key] != null && typeof someObject[key] === "object"){
            if (someObject[key] instanceof Array) copy[key]=someObject[key]
            else copy[key]=doDeepCopy(someObject[key]);  
        } 
    }
    return copy;
}
module.exports=doDeepCopy;