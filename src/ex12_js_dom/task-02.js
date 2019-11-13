let isOpen=false;
let buttonUser =document.getElementById('user');
let arrow=document.getElementById('arrow')
buttonUser.addEventListener( 'click',function(){
    if(isOpen===false){
        arrow.classList.remove('animationClose');
        arrow.classList.add('animationOpen');
        isOpen=true;
        // TODO ?
    }
    else{
        arrow.classList.remove('animationOpen');
        arrow.classList.add('animationClose');
        isOpen=false;
    }
})

// buttonUser.addEventListener('click',function(){
//     buttonUser.innerHTML()
// })