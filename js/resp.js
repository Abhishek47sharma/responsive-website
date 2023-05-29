burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-nav-resp');
    navList.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
    
})