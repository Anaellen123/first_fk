/* Abre e fecha menu lateral em modo mobile */


const menuMobile = document.querySelector('.menu-mobile')
const body = documet.querySelector('body')

menuMobile.addEventListerner('click', () => {
    menuMobile.classList.contains("bi-list")
        ?menuMobile.classList.replace("bi-list", "bi-x")
        :menuMobile.classList.replace("bi-x", "bi-list");
        body.classList.toggle("mobile-nav-activate")

});