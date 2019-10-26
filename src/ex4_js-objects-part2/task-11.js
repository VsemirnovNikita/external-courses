function countSameLetters(someString){
    let stringForCount=someString,letterCounter=1,letter;
    while(stringForCount!==''){
        letter = stringForCount.charAt(0)
        stringForCount=stringForCount.slice(1)
        for (let i=0;i<stringForCount.length;i++){
            if (letter===stringForCount.charAt(i)) {
                letterCounter++;
                stringForCount=stringForCount.slice(0,i)+stringForCount.slice(i+1)
            }
        }    
        console.log (letter,letterCounter);
        letterCounter=1;
    }  
}
module.exports=countSameLetters;
