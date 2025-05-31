/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOWN ======*/
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN ======*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 1) header.classList.add('shadow-header'); else header.classList.remove('shadow-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== COPYRIGHT YEAR ===============*/ 
const copyrightYear = document.querySelector("#copyright-year");
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;

/*=============== PAGE TITLE ===============*/
var currentTitle = document.title;
document.title = "Joe Mackle | " + currentTitle;

/*=============== TIMER ===============*/
function updateTime() {
  const startDate = new Date('2023-11-20T09:00:00');
  const now = new Date();
  const elapsed = now - startDate;

  const seconds = Math.floor((elapsed / 1000) % 60);
  const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

  document.getElementById('timer').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to set the timer immediately

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById("scroll-up")
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClsss = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClsss.classList.add('active-link')
    }else{
            sectionsClsss.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)