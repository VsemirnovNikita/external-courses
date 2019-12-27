const userButton = document.querySelector('.user');
const arrowIcon = document.querySelector('.arrow');
const main = document.querySelector('.main');
const myStorage = window.localStorage;
let isMenuOpen = false;
let addCardButtonsArray = [];
let dataMock = [{ title: 'Backlog', issues: [{ id: 'task-1', name: 'Sprint bugfix' }], },
{ title: 'Ready', issues: [{ id: 'task-1', name: '1' }], },
{ title: 'In progress', issues: [{ id: 'task-1', name: '2' }], },
{ title: 'Finished', issues: [{ id: 'task-1', name: '3' }], }]

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
    const addButtonWrapper = document.createElement("div");

    taskBlock.classList.add('taskBlock');
    head.classList.add('taskBlockHead');
    head.innerText = data.title;
    taskBlock.appendChild(head);
    taskBlock.appendChild(getTaskList(data));
    addButtonWrapper.classList.add('addTaskButton');
    addButtonWrapper.appendChild(getButton());
    taskBlock.appendChild(addButtonWrapper);
    main.appendChild(taskBlock);
}
function getTaskList(data) {
    const content = document.createElement("ul");
    let contentItem;
    for (let i = 0; i < data.issues.length; i++) {
        contentItem = document.createElement("li");
        contentItem.classList.add('taskBlockContentItem');
        contentItem.innerText = data.issues[i].name;
        content.appendChild(contentItem);
    }
    content.classList.add('taskBlockContent')
    return content
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
    dataMock[0].issues.push({ id: `task-${dataMock[0].issues.length}`, name: event.target.value });
    event.target.remove();
    let button = getButton();
    addCardButtonsArray[0] = button;
    document.querySelectorAll('.addTaskButton')[0].append(button);
    button.addEventListener("click", addNewTask);
    redrawTaskBlocks();
}

function getTaskToNextBlock(index) {
    return function (e) {
        let issues = dataMock[index - 1].issues;debugger
        addCardButtonsArray[index].remove();
        const select = document.createElement("SELECT");
        select.classList.add('addTaskToNextBlockSelect');
        for (let i = 0; i < issues.length; i++) {
            let option = document.createElement("OPTION");
            option.innerText = issues[i].name;
            select.appendChild(option);
        }
        document.querySelectorAll('.addTaskButton')[index].appendChild(select);
        select.onblur = function () {
            dataMock[index].issues.push({ id: `task-${dataMock[index].issues.length}`, name: event.target.value });
            dataMock[index - 1].issues.splice(select.selectedIndex, 1);
            event.target.remove();
            let button = getButton();
            addCardButtonsArray[index] = button;
            document.querySelectorAll('.addTaskButton')[index].append(button);
            button.addEventListener("click", getTaskToNextBlock(index));
            redrawTaskBlocks();
        }
    }
}

function drawTaskBlocks(){
    for (let i = 0; i < dataMock.length; i++) {
        createTaskBlock(dataMock[i]);
    }
    addCardButtonsArray[0].onclick = addNewTask;
    for (let i = 1; i < addCardButtonsArray.length; i++) {
        addCardButtonsArray[i].addEventListener('click', getTaskToNextBlock(i));
    }
}
function redrawTaskBlocks(){
    const taskBlocks = document.querySelectorAll('.taskBlock');
    for (let i = 0; i < taskBlocks.length; i++){
        document.querySelector('.taskBlock').remove();
    }
    addCardButtonsArray = [];
    drawTaskBlocks();
}

window.onunload = function () {
    myStorage.setItem("dataMock", dataMock);
}

window.onload = function () {
    if (!myStorage.getItem("dataMock")) {
        debugger;
        dataMock = myStorage.getItem("dataMock");
    }
    createMenu();
    drawTaskBlocks();
}