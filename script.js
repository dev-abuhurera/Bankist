const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const scrollButton = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

// Going Upward : Parent

//-------------------------------------------Direct Child-------------------------------------------------------

console.log(h1.childNodes);
console.log(h1.children); // Collection

//first and last element child

// h1.firstElementChild.style.color = 'white';
// h1.firstElementChild.style.color = 'white';

// ---------------------------Creating the Tab Component---------------------------------

// -------------------------------------------------------------------------------------------------
// It is a bad Practice and thus we will use the Event Deligation
// tabs.forEach(t => t.addEventListener('click', () => {
//   console.log('Clicked')
// }));

// -------------------------------------------------------------------------------------------------

// So, we have to add the eventListener to the parent element -----> ------->> -------->>> ----------->>>>

tabsContainer.addEventListener('click', (e) => {
  const click = e.target.closest('.operations__tab');

  // We need only the button itself and not the span element and even we click the span then at that point we should have the span again and thus we are using hte parentElement

  // Now the span is selected but now the second element started taking the parent too

  // Guard Clause
  if(!click) return

  // Before Assigning the active class to all we will first remove it 

  tabs.forEach((t) => {
    t.classList.remove('operations__tab--active') 
  })

  tabsContent.forEach((t) => {
    t.classList.remove('operations__content--active')
  })

  // Now we will use the method --- closet ---
  click.classList.add('operations__tab--active');


  // Active Content Area

  // DataAttribute has the information of which tab is to be displayed 
  document.querySelector(`.operations__content--${click.dataset.tab}`).classList.add('operations__content--active')


});

// =========================================================[Passing the Arguments in the event Handlers]==============================================

// Here we will design an effect in which all the links will fade out when we hover over one link

const hoverLink = function(e){
  // console.log(this, e.currentTarget);
   if(e.target.classList.contains('nav__link')){
    const link = e.target;
    // we have one link and for all the other links to be selected we will move towards the parent and then will select the child
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    console.log(siblings);
    const logo = link.closest('.nav').querySelector('img');

    //changing the opacity
    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

// mouseEnter and mouseOver --- same but mouseEnter doesnot bubble
// nav.addEventListener('mouseover', (e) => {
//  hoverLink(e, 0.5);
// })

// nav.addEventListener('mouseout', (e) => {
//    hoverLink(e, 1);
// })

// More Better Way is to use the bind method in this function
nav.addEventListener('mouseover', hoverLink.bind(0.5)); // Create the copy of the function
nav.addEventListener('mouseout', hoverLink.bind(1)); // bind return a new funciton

// ----------------------------------------------------------------------------------------------------------------------------------------

// Sticky navigation using the same intersection observer API
// This api observes our code --- when a certain element intersect the viewport 

const header = document.querySelector('.header');
const navheight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
 

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');  
};

const headerObserver = new IntersectionObserver(stickyNav,  {
  root: null,
  threshold: 0,
  rootMargin: `-${navheight}px`
});

headerObserver.observe(header);

// =============================================================Reveling the elements when we get close==============================================

// now basically we have added "section--hidden" class to all the sessions and we will reveal this as we move downwards 

const allSections = document.querySelectorAll('.section')

const revealSection = function (entries, observer){

  entries.forEach(entry => {
  if (!entry.isIntersecting) return
  else entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)  
  });

}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section)
  // we will add the hidden property programatically through js
  section.classList.add('section--hidden');
})

// ===================================================================Lazy Loading Images=================================================================


//using intersection observer api
const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = function(entries, observer){
  const [entry] = entries;
  console.log(entry)

  if(!entry.isIntersecting) return

  // replace src with data-src

  entry.target.src = entry.target.dataset.src;
  // js will fire the load event

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target);

}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '+200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider Component 


