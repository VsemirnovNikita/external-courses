function FindSimpleNumbers(testingNumber){
    let isSimple = true;
switch(true){
    case testingNumber===0:
    case testingNumber===1: console.log('Number',testingNumber,' is not simple or composite');
            break;
    case testingNumber<=1000: 
                            for(let i=2;i<testingNumber;i++){
                                if (testingNumber%i!==0) {
                                      isSimple=false;
                                      break;
                                }   
                            }
                            if (isSimple===true) console.log('Number',testingNumber,' is simple ')
                            else console.log('Number',testingNumber,' is composite');                  
                            break;        
    default: console.log('Data is wrong');
}
}
module.exports=FindSimpleNumbers;