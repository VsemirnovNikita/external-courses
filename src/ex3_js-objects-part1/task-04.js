function checkProperty (verifiableString,verifiableObject){
    let isVerified=false;
    for (let key in verifiableObject){
        if(key===verifiableString) isVerified=true;
    }
    if( isVerified === false){ 
        // eslint-disable-next-line no-param-reassign
        verifiableObject[verifiableString]='new';
    }
    return verifiableObject
}
module.exports=checkProperty;