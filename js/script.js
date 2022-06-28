//            header__burger-menu


const headerBurger = document.getElementById('header__burger');
const headerMenu = document.getElementById('header__menu');
const headerBottom = document.getElementById('header__bottom');
const body = document.body;

headerBurger.addEventListener('click', (e) => {
    e.preventDefault()
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    headerBottom.classList.toggle('active');
    body.classList.toggle('lock');

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})




//                   pop up

const popupBg = document.getElementsByClassName('popup__bg');
const popup = document.getElementsByClassName('popup');
const accountLogin = document.getElementById('account-login');
const closePopupBtn = document.getElementsByClassName('close-popup');
let popupBtn = document.getElementById('popupBtn')
let inputInfo = document.getElementsByClassName('input-info')
const formLogin = document.querySelector('#form-login')

accountLogin.addEventListener('click', (e) => {
    e.preventDefault()
    popupBg[0].classList.add('active');
    popup[0].classList.add('active');
    accountLogin.classList.add('active');

    body.classList.add('lock')

    headerBurger.classList.remove('active');
    headerMenu.classList.remove('active');

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

closePopupBtn[0].addEventListener('click', () => {
    popupBg[0].classList.remove('active');
    popup[0].classList.remove('active');
    body.classList.remove('lock')
    accountLogin.classList.remove('active');
})

document.addEventListener('click', (e) => {
    if (e.target === popupBg[0]) {
        popupBg[0].classList.remove('active');
        popup[0].classList.remove('active');
        body.classList.remove('lock')
        accountLogin.classList.remove('active');
    }
})



// links scroll

const menuLinks = document.querySelectorAll('.header__item[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });


    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 20;


            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            headerBurger.classList.remove('active');
            headerMenu.classList.remove('active');
            headerBottom.classList.remove('active');
            body.classList.remove('lock')
            e.preventDefault();
        }
    }
}