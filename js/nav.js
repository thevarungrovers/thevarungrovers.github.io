let nav_about = document.getElementById('nav-about')
let nav_about_dropdown = document.getElementById('nav-about-dropdown')

function showDropDown(){
    if(nav_about_dropdown.classList.contains("show")){
        nav_about_dropdown.classList.remove("show")
    }
    else{
        nav_about_dropdown.classList.add("show");
    }
}


function hideDropDown(){
        nav_about_dropdown.classList.remove("show");
}