/* eslint-disable guard-for-in */
function doDeepCopy(someObject){
    
    let copy ={},typeObject=Object.prototype.toString;
    if(someObject!==null){
    for (let key in someObject){
    switch(typeObject.call(key)){
        case 'object Object': copy[key]=doDeepCopy(someObject[key])
            break;
        case 'object Array': copy[key]=[];
            for (let i=0;i<key.length;i++){
            if(key[i] != null && typeof key[i] === "object") copy[key[i]]=doDeepCopy(key[i]) 
            else copy[key[i]]=someObject[key[i]]
        }
            break;
        default: copy[key]=someObject[key];
            break;
    }
    }
    }
    
    
    
    
    
    
    /*
    let copy = Object.assign({},someObject)
    for (let key in someObject){
        if(someObject[key] != null && typeof someObject[key] === "object"){
            if (someObject[key] instanceof Array) copy[key]=someObject[key]
            else copy[key]=doDeepCopy(someObject[key]);  
        } 
    }
    */
    return copy;
}
module.exports=doDeepCopy;