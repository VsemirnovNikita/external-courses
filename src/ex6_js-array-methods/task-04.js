function arrayFilter(array,callback) {
    let newArray=[];
    for (let i=0; i<array.length;i++){
        if (callback(array[i],i,array)==true) newArray.push(array[i]);;
    }
    return newArray;
}
module.exports=arrayFilter;
 
