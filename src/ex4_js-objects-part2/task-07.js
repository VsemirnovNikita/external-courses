function cutString(someString, someNumber) {
    return (someString.length > someNumber) ? someString.slice(0, someNumber - 1) + '…' : someString;
}
module.exports=cutString;