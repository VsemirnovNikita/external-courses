function FindMaxElement(array){
    let maxElement= array[0];
    for (let i =1; i<array.length;i++){
        if (array[i]>maxElement) maxElement=array[i];
    }
    return maxElement;
}
module.exports=FindMaxElement;