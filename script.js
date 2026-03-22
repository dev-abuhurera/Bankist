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


// ------------------------------------Event Bubbling + Propogation---------------------------------------------------------------
// Random Color Creation

// rgb(255, 255, 255)

// const randomInt = (min, max) => Math.floor(Math.random()  * (max - min + 1 ) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', (e) => {
//   e.target.style.backgroundColor = randomColor()
// });

// document.querySelector('.nav__links').addEventListener('click', (e) => {
//   e.target.style.backgroundColor = randomColor()
// });

// document.querySelector('.nav').addEventListener('click', (e) => {
//     e.target.style.backgroundColor = randomColor()
// });
// ---------------------------------------------------------------------------------------------------------------------------

// It is the default behaviour of #(id) ---> to move to the section that has that id  
// document.querySelectorAll('.nav__link').forEach(
//   function(el){
//     el.addEventListener('click', function(e){
//       e.preventDefault();
//       const id = this.getAttribute('href');
//       document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//     })
//   }
// )
// We can use the Event Deligation in which we will attach the event handler with the common parent and then the event will bubble up

document.querySelector('.nav__links').addEventListener('click', (e) => {
    //Now, we attached the event to the parent and we will see where the event happens
    e.preventDefault()
    //Matching Strategy
    if(e.target.classList.contains('nav__link')){
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
  }
)

// ============================================================Traversing Dom=====================================================================
// Parent (h1)
const h1 = document.querySelector('h1');
console.log(h1);

// Going Down to the Child ----- queryselector can directly work on the element
console.log(h1.querySelectorAll('.highlight'))

// Now if we have other classes not of the h1 element having the same highlight, then it will not get selected 

//-------------------------------------------Direct Child-------------------------------------------------------

console.log(h1.childNodes);
console.log(h1.children); // Collection

//first and last element child

h1.firstElementChild.style.color = 'white';
h1.firstElementChild.style.color = 'white';

// ---------------------------Creating the Tab Component---------------------------------

const tabs = document.querySelectorAll('.operations__tab');
console.log(tabs);

const tabsContainer = document.querySelector('.operations__tab-container');
console.log(tabsContainer);

const tabsContent = document.querySelectorAll('.operations__content');
console.log(tabsContent);


tabs.forEach(t => t.addEventListener('click', () => {
  console.log('Clicked')
}));
