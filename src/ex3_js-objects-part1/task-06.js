function doDeepCopy(someObject){
    let copy ={}
    for (let key in someObject){
        if(typeof key === 'object') doDeepCopy(key)
        else copy[key]=someObject[key];   
    }
    return copy;
}
module.exports=doDeepCopy;