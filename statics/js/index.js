const btn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const ul = document.querySelector('.nav-links');
const userBtn = document.querySelector('.profile_icon')
const userLogin = document.querySelector('.user-profile')
const sortBtn = document.querySelector('.check-filter')
const sortUl = document.querySelector('.sort-ul')

const tooltipBtn = document.querySelectorAll('.tooltip-btn')
const isOpen = document.querySelector('.open-tooltip')



btn.addEventListener('click', ()=>{
  console.log('hello')
  ul.classList.toggle('open');
  menuBar.classList.toggle('ham-open')

})

for(let i = 0; i < tooltipBtn.length; i++){
	tooltipBtn[i].addEventListener('mouseover', ()=>{
		isOpen.classList.add('isopen-tooltip')
	})

	tooltipBtn[i].addEventListener('mouseout', ()=>{
		isOpen.classList.remove('isopen-tooltip')
	})
	
}

userBtn.addEventListener('click', ()=>{
  userLogin.classList.toggle('user-open')
})


sortBtn.addEventListener('click', ()=>{
  sortUl.classList.toggle('sort-open')
})




// const promo = document.querySelector('.promo-nav')

// const promoFun = enteries => {
//   enteries.forEach(entry => {
//     entry.target.classList.toggle('promo-open')
//   })
// }
// const promoObserve = new IntersectionObserver(promoFun, {threshold:0.8})

// promoObserve.observe(promo)


function openCity(evt, cityName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("searchOpen").click();











