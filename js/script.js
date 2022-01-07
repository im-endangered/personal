//theme change=====================Dark========================//
const themeButton = document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='uil-sun'
//previously selected theme pre-selected()
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')
//save current theme
const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon=()=>document.body.classList.contains(iconTheme)?'uil-cloud-moon':'uil-sun'

//if topic selected already
if(selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uil-cloud-moon'?'add':'remove'](iconTheme)
}

//activate or deactivate the theme 
themeButton.addEventListener('click',()=>{
    //icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //save in local storage
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
console.log('Theme setting is working sir')

//SHow menu or hide menu
const navMenu=document.getElementById('nav-menu')
const navToggle=document.getElementById('nav-toggle')
const navClose=document.getElementById('nav-close')

//show menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
console.log("working toggle")
//remove menu profile
const navLink=document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))