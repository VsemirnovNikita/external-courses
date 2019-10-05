function doCopy (someObject){
    let copy = Object.assign({},someObject)
    return copy
}
module.exports=doCopy;