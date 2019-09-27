function FindSimpleNumbers(testingNumber){
    let isSimple = true;
switch(true){
    case testingNumber===0:
    case testingNumber===1: return('Number',testingNumber,' is not simple or composite');
            break;
    case testingNumber<=1000: 
                            for(let i=2;i<testingNumber;i++){
                                if (testingNumber%i===0) {
                                      isSimple=false;
                                      break;
                                }   
                            }
                            if (isSimple===true) return('Число '+testingNumber+' - простое число')
                            else return('Число '+testingNumber+' - составное число');// eslint-disable-line                 
                            break;        
    default: return('Data is wrong');
}
}
module.exports=FindSimpleNumbers;