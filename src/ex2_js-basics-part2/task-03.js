function countOddEvenZeroElements(array){
let evenOddZeroarray=[0,0,0];
    for (let i=0;i<array.length;i++){
        if (typeof(array[i])==='number'){ 
            if (array[i]===0) evenOddZeroarray[2]++
            else{
                if((array[i]%2)===0) evenOddZeroarray[0]++
                else evenOddZeroarray[1]++;
            }
        }
    }
    return evenOddZeroarray;
   
}
module.exports=countOddEvenZeroElements;