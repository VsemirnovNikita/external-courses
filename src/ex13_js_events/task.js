const userButton =document.getElementById('user');
const arrowIcon=document.getElementById('arrow');
const main = document.querySelector('.main')
let isMenuOpen=false;

const dataMock=[{title:'Backlog',issues:[{id:'task1', name:'Sprint bugfix'}],},
                {title:'Ready',issues:[{id:'task1', name:'Sprint bugfix'}],},
                {title:'In progress',issues:[{id:'task1', name:'Sprint bugfix'}],},
                {title:'Finished',issues:[{id:'task1', name:'Sprint bugfix'}],}]

menuCreate();
for(let i=0;i< dataMock.length;i++){
    createTaskBlock(dataMock[i]);
}

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

function createTaskBlock(data){
   const taskBlock=document.createElement("div");
   taskBlock.classList.add('taskBlock');
   const head =document.createElement("div");
   head.classList.add('taskBlockHead');
   head.innerText=data.title;
   taskBlock.appendChild(head);
   const content = document.createElement("div");
   content.classList.add('taskBlockContent')
   taskBlock.appendChild(content);
   let contentItem;
   for( let i=0; i< data.issues.length;i++){ 
        contentItem= document.createElement("div");
        contentItem.classList.add('taskBlockContentItem');
        contentItem.innerText=data.issues[i].name;
        content.appendChild(contentItem);
   }
   const addButtonWrapper=document.createElement("div"); 
   addButtonWrapper.classList.add('addTaskButton');
   addButtonWrapper.appendChild(addButton());
   taskBlock.appendChild(addButtonWrapper);
   main.appendChild(taskBlock);
}

function addButton(){
    const addCardButton= document.createElement("button");
    addCardButton.classList.add('addCard');
    addCardButton.onclick=addNewTask;
    const plus =document.createElement("img");
    plus.src="plus-solid.svg";
    plus.classList.add('addTaskButtonImage');
    addCardButton.appendChild(plus);
    let buttonText= document.createElement('p')
    buttonText.innerText='Add card';
    addCardButton.appendChild(buttonText);
    return addCardButton;
}
function addNewTask(){
    document.querySelector('.addCard').remove();
    let newTaskInput= document.createElement("INPUT");
    newTaskInput.setAttribute("type", "text");
    document.querySelector('.addTaskButton').appendChild(newTaskInput);
    
}