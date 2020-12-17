const btn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const ul = document.querySelector('.nav-links');
const userBtn = document.querySelector('.profile_icon')
const userLogin = document.querySelector('.user-profile')

btn.addEventListener('click', ()=>{
  console.log('hello')
  ul.classList.toggle('open');
  menuBar.classList.toggle('ham-open')

})

userBtn.addEventListener('click', ()=>{
  userLogin.classList.toggle('user-open')
})


const box = document.querySelector('#box')

const callbackFun = (enteries)=>{
  console.log(enteries[0])
}

const newObserver = new IntersectionObserver(callbackFun)

newObserver.observe(box)

document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.carousel');
  const instances = M.Carousel.init(elems, options);
});

const instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});



