function arrayEvery(array,callback) {
    let result=true;
    for (let i=0; i<array.length;i++){
        if (callback(array[i],i,array)==false) result=false;
    }
    return result;
}
module.exports=arrayEvery;
 
