const userButton =document.getElementById('user');
const arrowIcon=document.getElementById('arrow');
let isMenuOpen=false;

menuCreate();
userButton.addEventListener( 'click',function(){
    let downDrop =document.querySelector('.dropDownContent');
    if(isMenuOpen===false){
        arrowIcon.classList.remove('animationClose');
        arrowIcon.classList.add('animationOpen');
        downDrop.style.display='block';
        isMenuOpen=true;
        
    }
    else{
        arrowIcon.classList.remove('animationOpen');
        arrowIcon.classList.add('animationClose');
        downDrop.style.display='none';
        isMenuOpen=false;
    }
})


function menuCreate (){
    const menu=document.createElement("div");
    menu.classList.add('dropDownContent');
    let menuItem=document.createElement("div");
    menuItem.innerText='My account';
    menuItem.classList.add('dropDownItem');
    menu.appendChild(menuItem);
    menuItem=document.createElement("div");
    menuItem.innerText='My tasks';
    menuItem.classList.add('dropDownItem');
    menu.appendChild(menuItem);
    menuItem=document.createElement("div");
    menuItem.innerText='Log out';
    menuItem.classList.add('dropDownItem');
    menu.appendChild(menuItem);
    
    userButton.appendChild(menu);
}