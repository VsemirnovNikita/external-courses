const userButton = document.querySelector('.user');
const arrowIcon = document.querySelector('.arrow');
const main = document.querySelector('.main');
let isMenuOpen = false;
const addCardButtonsArray = [];
const dataMock = [{ title: 'Backlog', issues: [{ id: 'task-1', name: 'Sprint bugfix' }], },
{ title: 'Ready', issues: [{ id: 'task-1', name: 'Sprint bugfix' }], },
{ title: 'In progress', issues: [{ id: 'task-1', name: 'Sprint bugfix' }], },
{ title: 'Finished', issues: [{ id: 'task-1', name: 'Sprint bugfix' }], }]

createMenu();
for (let i = 0; i < dataMock.length; i++) {
    createTaskBlock(dataMock[i]);
}
addCardButtonsArray[0].onclick = addNewTask;
for (let i = 1; i < addCardButtonsArray.length; i++) {
    addCardButtonsArray[i].addEventListener('click',getTaskToNextBlock(i));
}

userButton.addEventListener('click', function () {
    let downDrop = document.querySelector('.dropDownContent');
    if (isMenuOpen === false) {
        arrowIcon.classList.remove('animationClose');
        arrowIcon.classList.add('animationOpen');
        downDrop.style.display = 'block';
        isMenuOpen = true;
    }
    else {
        arrowIcon.classList.remove('animationOpen');
        arrowIcon.classList.add('animationClose');
        downDrop.style.display = 'none';
        isMenuOpen = false;
    }
})

function createMenu() {
    const menu = document.createElement("div");
    const menuItemCaptions = ['My tasks', 'My account', 'Log out'];
    let menuItem;
    menu.classList.add('dropDownContent');
    let menuItems = menuItemCaptions.map(caption => {
        menuItem = document.createElement("div");
        menuItem.innerText = caption;
        menuItem.classList.add('dropDownItem');
        menu.appendChild(menuItem);
    })
    userButton.appendChild(menu);
}

function createTaskBlock(data) {
    const taskBlock = document.createElement("div");
    const head = document.createElement("div");
    const content = document.createElement("ul");
    const addButtonWrapper = document.createElement("div");
    let contentItem;

    taskBlock.classList.add('taskBlock');
    head.classList.add('taskBlockHead');
    head.innerText = data.title;
    taskBlock.appendChild(head);

    content.classList.add('taskBlockContent')
    taskBlock.appendChild(content);

    for (let i = 0; i < data.issues.length; i++) {
        contentItem = document.createElement("li");
        contentItem.classList.add('taskBlockContentItem');
        contentItem.innerText = data.issues[i].name;
        content.appendChild(contentItem);
    }

    addButtonWrapper.classList.add('addTaskButton');
    addButtonWrapper.appendChild(getButton());
    taskBlock.appendChild(addButtonWrapper);
    main.appendChild(taskBlock);
}

function getButton() {
    const addCardButton = document.createElement("button");
    const plus = document.createElement("img");
    let buttonText = document.createElement('p');

    addCardButton.classList.add('addCard');

    plus.src = "plus-solid.svg";
    plus.classList.add('addTaskButtonImage');
    addCardButton.appendChild(plus);

    buttonText.innerText = 'Add card';
    addCardButton.appendChild(buttonText);
    addCardButtonsArray.push(addCardButton);
    return addCardButton;
}
function addNewTask() {
    addCardButtonsArray[0].remove();
    let newTaskInput = document.createElement("INPUT");
    newTaskInput.setAttribute("type", "text");
    document.querySelector('.addTaskButton').appendChild(newTaskInput);
    newTaskInput.onblur = getNewTask;
}
function getNewTask(event) {    
    event.target.remove();
    let button=getButton();
    document.querySelectorAll('.addTaskButton')[0].append(button);
    button.addEventListener("click",addNewTask);
}
function getTaskToNextBlock(index) {
    return function(e){
        const issues = dataMock[index - 1].issues;
        addCardButtonsArray[index].remove();
        const select=document.createElement("SELECT");
        select.classList.add('.addTaskToNextBlockSelect');
        for (let i=0;i<issues.length;i++) {         
            let option = document.createElement("OPTION");
            option.innerText=issues[i].name;
            select.appendChild(option);
        }
        document.querySelectorAll('.addTaskButton')[index].appendChild(select);
        select.onblur=function(){
            dataMock[index].issues.push({ id: `task-${dataMock[index].issues.length}`, name: event.target.value });
            dataMock[index-1].issues.splice(index-1,1);
            event.target.remove();
            let button=getButton();
            document.querySelectorAll('.addTaskButton')[index].append(button);
            button.addEventListener("click",getTaskToNextBlock(index));
        }
    }
   
}
