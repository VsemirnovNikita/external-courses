function checkProperty (verifiableString,verifiableObject){
    if( !(verifiableString in verifiableObject)){ 
        verifiableObject[verifiableString]='new';
    }
    return verifiableObject
}
module.exports=checkProperty;