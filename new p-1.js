
var settingMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");


function settingMenutoogle(){
    settingMenu.classList.toggle("setting-menu-height")
}

darkBtn.onclick = function (){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}





