function arraySlice (array,begin=0,end=array.length){
    let newArray=[];
    if(begin<0&&end<0){
        for (let i=begin+array.length;i<end+array.length;i++){
            newArray.push(array[i]);
        }
    }
    else{
    for (let i=begin;i<end;i++){
        newArray.push(array[i]);
    }
    }
    return newArray
} 
module.exports=arraySlice;
