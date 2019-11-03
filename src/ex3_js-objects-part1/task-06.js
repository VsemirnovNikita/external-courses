/* eslint-disable guard-for-in */
function doDeepCopy(someObject){
    
    let copy ={},typeObject=Object.prototype.toString;
    if(someObject!==null){
    for (let key in someObject){
    switch(typeObject.call(someObject[key])){
        case '[object Object]': copy[key]=doDeepCopy(someObject[key])
            break;
        case '[object Array]': copy[key]=[];
            for (let i=0;i<someObject[key].length;i++){
            if(someObject[key][i] != null && typeof someObject[key][i] === "object") copy[key][i]=doDeepCopy(someObject[key][i]) 
            else copy[key][i]=someObject[key][i]
        }
            break;
        default: copy[key]=someObject[key];
     console.log(typeObject.call(someObject[key]));
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

let a={"a": 1, "b": {"c": 0}, "e": {"f": [{"g": 1}]}}
doDeepCopy(a);
 