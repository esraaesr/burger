const navMenu = document.getElementById("nav-menu"),
      navToggel = document.getElementById("nav-Toggel"),
      navClose  =document.getElementById("nav-close");


if(navToggel){
    navToggel.addEventListener("click" ,()=>{
        navMenu.classList.add("show-menu")
    })
}  
if(navClose){
    navClose.addEventListener("click" , ()=>{
        navMenu.classList.remove("show-menu")
    })
} 

const navLink = document.querySelectorAll(".nav-links");
const linkAction = ()=>{
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click" ,linkAction));


const shadowHeader = ()=>{
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("shadow-header")
                        :header.classList.remove("shadow-header")
}
window.addEventListener("scroll" , shadowHeader);

const scrollUp = () =>{
    const scrollUp = document.getElementById("scrollUp");
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                         : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll" , scrollUp);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollPosition = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollPosition > sectionTop && scrollPosition <= (sectionTop + sectionHeight)) {
            sectionLink.classList.add("active-link");
        } else {
            sectionLink.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);



const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true,

})
sr.reveal(`.home-data , .footer`);
sr.reveal(`.home-dish` , {delay: 500 , distance: '100px' , origin: 'bottom' });
sr.reveal(`.home-burger` , {delay: 1200 , distance: '100px' , duration: 1500});
sr.reveal(`.home-ingredient` , {delay: 1600 , interval: 100});
sr.reveal(`.recipe-img , .delivery-img , .contact-image` , {origin: 'left'});
sr.reveal(`.recipe-data , .delivery-data , .contact-data` , {origin: 'right'});
sr.reveal(`.popular-card` , {interval: 100});