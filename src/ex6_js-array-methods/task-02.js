function arraySome(array,callback) {
    let result=false;
    for (let i=0; i<array.length;i++){
        if (callback(array[i],i,array)==true) result=true;
    }
    return result;
}
module.exports=arraySome;
