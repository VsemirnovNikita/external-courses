let imagesArray=['01.jpg','02.jpg','03.jpg','04.jpg','05.jpeg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg',]
let image=document.getElementById('page')
function findPreviousImage(imageURL){
    let newImage=imageURL;
    for(let i=0 ; i< imagesArray.length;i++){
        if(imagesArray[i]===imageURL) {
            if (i===0) newImage = imagesArray[imagesArray.length-1]
            else newImage=imagesArray[i-1];
        }
    }
    return newImage;
}
function findNextImage (imageURL){
    let newImage=imageURL;
    for(let i=0 ; i< imagesArray.length;i++){
        if(imagesArray[i]===imageURL) {
            if (i===imagesArray.length-1) newImage = imagesArray[0]
            else newImage=imagesArray[i+1];
        }
    }
    return newImage;
}

document.getElementById('left').onclick=function(){
    image.setAttribute('src',findNextImage(image.getAttribute('src')))
}

document.getElementById('right').onclick=function(){
    image.setAttribute('src',findPreviousImage(image.getAttribute('src')))
}
