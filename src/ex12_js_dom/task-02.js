const userButton = document.querySelector('.user');
const arrowIcon = document.querySelector('.arrow');
let isMenuOpen = false;

createMenu();
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