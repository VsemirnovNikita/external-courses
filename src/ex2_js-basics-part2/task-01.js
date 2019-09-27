function ChooseNumberOrString(argument){
 switch(typeof(argument)){
     case 'string':return('string');
     break;
     case 'number':return ('number');
     break;
     default:return (undefined);
 }  
}
module.exports=ChooseNumberOrString;