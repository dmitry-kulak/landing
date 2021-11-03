'use strict';

const reviews = document.querySelectorAll('.review__text');

const cropText = (reviews, cropTo = 200) => {
  reviews.forEach(
    (review) => review.innerHTML = review.innerHTML.slice(0, cropTo) +
      '...',
  );
};

cropText(reviews);

const hamburger = document.querySelector('.navbar__hamburger');
const navbarNav = document.querySelector('.navbar__nav');

hamburger.addEventListener('click', () => {
  navbarNav.classList.toggle('navbar__nav_show');
  hamburger.classList.toggle('navbar__hamburger_open');
});

$('.reviews-block').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px"' +
    ' viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0' +
    ' 0h24v24H0z" fill="none"/><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9' +
    ' 1.77-1.77L3.54 12z"/></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow"><svg  xmlns="http://www.w3.org/2000/svg"' +
    '  height="24px" viewBox="0 0 24 24" width="24px"' +
    ' fill="#000000"><g><path d="M0,0h24v24H0V0z"' +
    ' fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2' +
    ' 6.23,3.77 14.46,12"/></g></svg></button>',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});