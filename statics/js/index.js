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


const box = document.querySelector('.title-move')

const options = {
  rootmargin:"100px"
}
const callbackFun = (enteries)=>{
  enteries.forEach(entry => {
    entry.target.classList.add('title-open')
  });
}

const newObserver = new IntersectionObserver(callbackFun, options)

newObserver.observe(box)

// const promo = document.querySelector('.promo-nav')

// const promoFun = enteries => {
//   enteries.forEach(entry => {
//     entry.target.classList.toggle('promo-open')
//   })
// }
// const promoObserve = new IntersectionObserver(promoFun, {threshold:0.8})

// promoObserve.observe(promo)




