function showProperties (someObject){
    for (let key in someObject){
        console.log(key,someObject[key])
    }
}
module.exports=showProperties;