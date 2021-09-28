'use strict';

const reviews = document.querySelectorAll('.review-text');

const cropText = (reviews, cropTo = 200) => {
  reviews.forEach(
    (review) => review.innerHTML = review.innerHTML.slice(0, cropTo) +
      '...',
  );
};

cropText(reviews);

const hamburger = document.getElementById('hamburger');
const navbarNav = document.getElementById('navbar-nav')

hamburger.addEventListener('click', () => {
  navbarNav.classList.toggle('show');
})