function CountOddEvenZeroElements(array){
let evenOddZeroarray=[0,0,0];
    for (let i=0;i<array.length;i++){
        switch (true){
            case array[i]===0: evenOddZeroarray[2]++;
            break;
            case ((array[i]%2)===0)&&(typeof(array[i])==='number'):evenOddZeroarray[0]++;
            break;
            case ((array[i]%2)===1)&&(typeof(array[i])==='number'):evenOddZeroarray[1]++;
            break;
            default: break;
            
        }
    }
    for (let i=0;i<evenOddZeroarray.length;i++){
        console.log(evenOddZeroarray[i]);
    }
}
module.exports=CountOddEvenZeroElements;