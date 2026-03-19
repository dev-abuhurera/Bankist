const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const scrollButton = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

scrollButton.addEventListener('click', (e) => {

  console.log('pressed');
  // Getting the coordinates of the section we want to scroll to

  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // target is the button that is clicked here 
  // Scroll relative to the button
  console.log(e.target.getBoundingClientRect());

  //Scroll relative to window
  console.log('Current Scroll (X/Y)', window.scrollX, window.scrollY)

  // height and weight with respect of the window 
  console.log('height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Coordinates For Scrolling || This is the Scrolling 
  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);

  // Smooth Scrolling

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX, 
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // Modern Way

  section1.scrollIntoView({behavior: 'smooth'});

});


// Random Color Creation

// rgb(255, 255, 255)

const randomInt = (min, max) => Math.floor(Math.random()  * (max - min + 1 ) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', (e) => {
  e.target.style.backgroundColor = randomColor()
});

document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.target.style.backgroundColor = randomColor()
});

document.querySelector('.nav').addEventListener('click', (e) => {
    e.target.style.backgroundColor = randomColor()
});

