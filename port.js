let menuItems = document.querySelector('.js-menu-items');
let showButton = document.querySelector('.dashicon');
let hideButton = document.querySelector('.xIcon');


showButton.addEventListener('click',() => {
   showIcon();
});

hideButton.addEventListener('click',() => {
  hideIcon();
});

function showIcon(){
  menuItems.classList.add('active');
  showButton.classList.add('js-hide');
  hideButton.classList.remove('js-hide');
 
}

function hideIcon(){
  hideButton.classList.add('js-hide');
  menuItems.classList.remove('active');
  showButton.classList.remove('js-hide');
  
}



/*.................................................. active links navbar section........................................................*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');


    if(top >= offset && offset + height){
      navlinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector(`header nav a[href='#${id}']`).classList.add('active');
      });
    };
  });

/*..................................................... sticky navbar section...........................................................*/

  let header = document.querySelector('.js-navbar');
  header.classList.toggle('sticky', window.scrollY > 100);
 /*............................................... remove toggle icon and navbar........................................................*/
}

/*.........................................................home multiple typed js......................................................*/

 const typed = new Typed('.js-multiple-text', {
  strings: ['Frontend Developer', 'Web Designer'],
  typeSpeed: 100, //speed of typing (lower is faster)
  backSpeed: 100, //speed of deleting (lower is faster)
  backDelay: 1500, //delay before starting to delete
  startDelay: 500, //intial delay before typing starts
  loop: true, //keep the animation looping
 });


/*....................................................scroll reveal for sections........................................................*/

ScrollReveal({
  distance: '80px', //how much px we need move
  duration: 2000, //animation duration (in ms)
  delay: 200, // delay before animation starts
  reset: true, //repeats animation on scroll
});

ScrollReveal().reveal('.home-text, .heading, .heading-4', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin: 'buttom' });
ScrollReveal().reveal('.home-text h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-text p, .about-content', { origin: 'right' });


/*.................................................validation for contact form.........................................................*/

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const number_error = document.getElementById('number_error');
const subject_error = document.getElementById('subject_error');
const message_error = document.getElementById('message_error');

form.addEventListener('submit', (e) => {
  
 /*...........................name input....................... */

  if(name.value === '' || name.value == null){
    e.preventDefault();
    name_error.innerHTML= `Full Name can't be blank`;
    return;
  }else{
    name_error.innerHTML='';
  }

   /*...........................email input....................... */


  if(email.value === ''){
    e.preventDefault();
    email_error.innerHTML=`Email Address can't be blank`;
    return;
  }else if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
    e.preventDefault();
    email_error.innerHTML=`Invalid Email Address`;
    return;
  }else{
    email_error.innerHTML= '';
  }

   /*...........................phone input....................... */
    if(phone.value === ''){
      e.preventDefault();
      number_error.innerHTML=`Mobile Number can't be blank`;
      return;
    }
    else if(phone.value.length !== 10){
      e.preventDefault();
      number_error.innerHTML= "Invalid phone number (Must be 10 digits)";
      return;
    }
    else if(phone.value === ''){
      e.preventDefault();
      number_error.innerHTML=`Mobile Number can't be blank`;
      return;
    }
    else if(!phone.value.match(/^\+?[1-9]\d{1,14}$/)){
      e.preventDefault();
      number_error.innerHTML=`Mobile Number is invalid`;
      return;
    }
    else{  
      number_error.innerHTML= '';
    }

   /*......................email subject input....................... */

  if(subject.value === '' || subject.value == null){
    e.preventDefault();
    subject_error.innerHTML=`Email Subject can't be blank`;
    return;
  }else{
    subject_error.innerHTML='';
  }

   /*..........................message input......................... */

  if(message.value === '' || message.value == null){
    e.preventDefault();
    message_error.innerHTML=`Message can't be blank`;
    return;
  }else{
    message_error.innerHTML= '';
  }
 
});



 /*................................................... screen size finding .............................................................*/

 let width =document.querySelector('.js-width').innerHTML =(window.innerWidth);


/*.................................................... contact form to email............................................................*/


 