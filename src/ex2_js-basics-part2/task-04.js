function CheckTheSameElements(array){
  let isSame = true;
  for (let i=1; i<array.length;i++) {
    if (array[0]!== array[i]) isSame=false;
  }
  console.log(isSame)
}
module.exports=CheckTheSameElements;