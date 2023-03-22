let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr=ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', {delay:100,origin:'top'})
sr.reveal('.home-img', {delay:150,origin:'top'})
sr.reveal('.about',{delay: 200, origin:'top'})