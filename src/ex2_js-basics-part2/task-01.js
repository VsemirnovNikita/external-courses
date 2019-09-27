function ChooseNumberOrString(argument){
if (typeof argument ==='string'){
    console.log('string');
}else if (typeof argument ==='number'){
        console.log ('number');
        }      
      else console.log ('undefined');   
}
module.exports=ChooseNumberOrString;