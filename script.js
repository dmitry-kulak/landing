'use strict'

const reviews = Array.from(document.querySelectorAll('.review-text'))

const croppedReviews = reviews.map(review => [
  review.innerHTML.slice(0, 200),
  review.innerHTML.slice(200, review.innerHTML.length)])

for (let i = 0; i <= 2; i++){
  reviews[i].innerHTML = croppedReviews[i][0] + '...'
}

const showFullText = (review, croppedReview) => {
  review.innerHTML = croppedReview[0] + croppedReview[1];
  review.classList.remove('cropped')
}

for (let i = 0; i <= 2; i++){
  reviews[i].addEventListener('click',
    () => showFullText(reviews[i], croppedReviews[i]))
}