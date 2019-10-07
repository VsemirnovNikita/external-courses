function findSubstring (substring,someString){
    let isSubstring=false;
    if (someString.indexOf(substring)!=-1) isSubstring=true;
    return isSubstring;
}
module.exports=findSubstring;