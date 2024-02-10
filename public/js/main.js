//  Popup
const btn = document.querySelector('.delivery__btn');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const popupBtn = document.querySelector('.popup__btn');
const popupBtnClose = document.querySelector('.popup__btn-close');
const popupForm = document.querySelector('.popup__wrapper-form');
const popupDone = document.querySelector('.popup__wrapper-done');

function showContent(btn, content) {
    btn.addEventListener("click", function () {
        content.style.display = "block";
    })
}
function closeContent(btn, content) {
    btn.addEventListener("click", function () {
        content.style.display = "none";
        popupDone.style.display = "none";
        popupForm.style.display = "block";
    })
}



popupBtn.addEventListener("click", function(e){
    e.preventDefault();
    popupForm.style.display = "none";
    popupDone.style.display = "block";

})
popupBtnClose.addEventListener("click", function(e){
    e.preventDefault();
    popup.style.display = "none";
    popupDone.style.display = "none";
    popupForm.style.display = "block";
})

showContent(btn, popup);
closeContent(closePopup, popup);


// Navbarmobile
const hamburger = document.querySelector('.header__hamburger');
const navbar = document.querySelector('.header__navbar-mobile');
const closeNavbar = document.querySelector('.header__navbar-close');



showContent(hamburger, navbar);
closeContent(closeNavbar, navbar);







// Slider

const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');
const background = document.querySelector('.main');

const dotsBlock = document.querySelector('.main__dots');
const dots = document.querySelectorAll('.main__dot');

const slides = ['main.png', 'fruits.png', 'smuzi.png']

let counter = 0;



// Логика дотов


dotsBlock.addEventListener('click', e => {
    const target = e.target
    
    if (target.className === 'main__dot') {
        for ( const dot of dots){
            dot.classList.remove("active");
        }
        counter = target.dataset.id - 1;
        background.style.backgroundImage = `url('/public/img/${slides[counter]}')`;
        target.classList.add("active");
    }
})


// Логика слайдера

prevButton.addEventListener("click", function(){
    counter--
    if(counter < 0){
        counter=slides.length - 1;
    }
    background.style.backgroundImage = `url('/public/img/${slides[counter]}')`;
})

nextButton.addEventListener("click", function(){
    counter++
    if(counter > slides.length - 1){
        counter = 0;
    }
    background.style.backgroundImage = `url('/public/img/${slides[counter]}')`;
})
