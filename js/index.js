const btnShowDropDown = document.querySelector("#btnShowDropDown"); 
btnShowDropDown.addEventListener("click", dropDownSwitch);

function dropDownSwitch() {
    const menu = document.querySelector("header > menu");
    const menuUl = document.querySelector("header > menu > ul")
    if (menu.style.display == '') {
        btnShowDropDown.innerHTML = `<i class="fa-light fa-xmark"></i>`
        menuUl.style.animation = 'show 0.5s ease';
        menu.style.display = 'flex';
    }else{
        btnShowDropDown.innerHTML = `<i class="fa-sharp fa-solid fa-bars">`
        menuUl.style.animation = 'hide 0.5s ease';
        setTimeout(() => {
            menu.style.display = '';
        }, 500);
    }
    setTimeout(() => {
        menuUl.style.animation = '';
    }, 500);
}