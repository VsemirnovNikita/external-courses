function FindSimpleNumbers(testingNumber){
    let isSimple = true;
    let typeOfNumber;
    if(testingNumber===0 || testingNumber===1) return('Number',testingNumber,' is not simple or composite');
    if (testingNumber>=1000)return('Данные неверны');    
    if(testingNumber<=1000) {
        for(let i=2;i<testingNumber;i++){
            if (testingNumber%i===0) {
                isSimple=false;
                break;
            }   
        }
    }
    if (isSimple===true) typeOfNumber=' - простое число'
    else typeOfNumber=' - составное число';               
                                  
    return('Число '+testingNumber+typeOfNumber);
}

module.exports=FindSimpleNumbers;