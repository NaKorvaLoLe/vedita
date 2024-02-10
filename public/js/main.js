

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




const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');
const slider = document.querySelector('.main__slider');
const slides = Array.from(slider.querySelectorAll('.main__slide'));
const slideCount = slides.length;
let slideIndex = 0;

const dotsBlock = document.querySelector('.main__dots');
const dots = document.querySelectorAll('.main__dot');




// Логика слайдера

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    
    
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
  
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {

    if (index === slideIndex) {
      slide.style.display = 'block';
      for ( const dot of dots){
        dot.classList.remove("active");
        }
      dots[slideIndex].classList.add("active");
    } else {
      slide.style.display = 'none';
    }
  });
}


// Инициализация слайдера
updateSlider();





// Логика дотов


dotsBlock.addEventListener('click', e => {
    const target = e.target
    
    if (target.className === 'main__dot') {
        for ( const dot of dots){
            dot.classList.remove("active");
        }
        slides[slideIndex].style.display = 'none';
        slideIndex = target.dataset.id - 1;
        slides[slideIndex].style.display = 'block';
        target.classList.add("active");
    }
})