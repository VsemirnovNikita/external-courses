function insertWord(someString,word,position=0){
    let spaseCounter = -1;
    if(!someString) return word
    for (let i=0;i<someString.length;i++){
        if (someString[i]===' ') spaseCounter++;
        if (spaseCounter==position){
            // eslint-disable-next-line no-param-reassign
            someString=someString.slice(0,i)+' '+word+' '+someString.slice(i+1);
            break;
        }
    }
    return someString
}
module.exports=insertWord;