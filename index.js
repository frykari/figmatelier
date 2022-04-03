
let iconCancel = document.querySelector(".profile-cancel");
let menu = document.querySelector(".menu");
let profile = document.querySelector(".profile");
let profileLogo=document.querySelector(".profile-logo");

menu.addEventListener("click", ()=>{
    profile.classList.add("profile-add");
    document.body.style.overflow ="hidden";
});
profileLogo.addEventListener("click", ()=>{
    profile.classList.remove("profile-add");
    document.body.style.overflowY ="scroll";
});
iconCancel.addEventListener("click", ()=>{
    profile.classList.remove("profile-add");
    document.body.style.overflowY ="scroll";
});


