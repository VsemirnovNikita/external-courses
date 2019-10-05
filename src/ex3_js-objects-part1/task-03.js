function checkProperty (verifiableString,verifiableObject){
    let isVerified=false;
    for (let key in verifiableObject){
        if(key===verifiableString) isVerified=true;
    }
    return isVerified;
}
module.exports=checkProperty;