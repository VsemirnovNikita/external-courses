const array = [1,2,3,4];
DisplayArrayAndFindItLenght(array);
function DisplayArrayAndFindItLenght(array){
    let count=0;
    for (let i=0; i<array.length;i++){
        console.log(array[i]);
        count++;
    }
    console.log(count);
}