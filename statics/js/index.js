const btn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const ul = document.querySelector('.nav-links');
const userBtn = document.querySelector('.profile_icon')
const userLogin = document.querySelector('.user-profile')
const sortBtn = document.querySelector('.check-filter')
const sortUl = document.querySelector('.sort-ul')

const searchBtn = document.querySelector('.search')
const searchPage = document.querySelector('.search-page')
const searchClose = document.querySelector('.search-close')

btn.addEventListener('click', ()=>{
  console.log('hello')
  ul.classList.toggle('open');
  menuBar.classList.toggle('ham-open')

})

userBtn.addEventListener('click', ()=>{
  userLogin.classList.toggle('user-open')
})

searchBtn.addEventListener('click', ()=>{
	console.log('search clicked')
  searchPage.classList.toggle('search-open')
})

sortBtn.addEventListener('click', ()=>{
  sortUl.classList.toggle('sort-open')
})

searchClose.addEventListener('click', ()=>{
	console.log('search clicked')
  searchPage.classList.toggle('search-open')
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


window.addEventListener('DOMContentLoaded', () => {
	new dualRangeSlider(document.querySelector(".dual-range"))
})






class dualRangeSlider {
	constructor(rangeElement) {
		this.range = rangeElement
		this.min = Number(rangeElement.dataset.min)
		this.max = Number(rangeElement.dataset.max)
		this.handles = [...this.range.querySelectorAll(".handle")]
		this.startPos = 0;
		this.activeHandle;
		
		this.handles.forEach(handle => {
			handle.addEventListener("mousedown", this.startMove.bind(this))
			handle.addEventListener("touchstart", this.startMoveTouch.bind(this))
		})
		
		window.addEventListener("mouseup", this.stopMove.bind(this))
		window.addEventListener("touchend", this.stopMove.bind(this))
		window.addEventListener("touchcancel", this.stopMove.bind(this))
		window.addEventListener("touchleave", this.stopMove.bind(this))
		
		const rangeRect = this.range.getBoundingClientRect();
		const handleRect = this.handles[0].getBoundingClientRect()
		this.range.style.setProperty("--x-1", "0px");
		this.range.style.setProperty("--x-2", rangeRect.width - handleRect.width/2 + "px");
		this.handles[0].dataset.value = this.range.dataset.min;
		this.handles[1].dataset.value = this.range.dataset.max;
	}
	
	startMoveTouch(e) {
		const handleRect = e.target.getBoundingClientRect()
		this.startPos = e.touches[0].clientX - handleRect.x;
		this.activeHandle = e.target;
		this.moveTouchListener = this.moveTouch.bind(this)
		window.addEventListener("touchmove", this.moveTouchListener);
	}
	
	startMove(e) {
		this.startPos = e.offsetX;
		this.activeHandle = e.target;
		this.moveListener = this.move.bind(this)
		window.addEventListener("mousemove", this.moveListener);
	}
	
	moveTouch(e) {
		this.move({clientX: e.touches[0].clientX})
	}
	
	move(e) {
		const isLeft = this.activeHandle.classList.contains("left")
		const property = isLeft ? "--x-1" : "--x-2";
		const parentRect = this.range.getBoundingClientRect();
		const handleRect = this.activeHandle.getBoundingClientRect();
		let newX = e.clientX - parentRect.x - this.startPos;
		if(isLeft) {
			const otherX = parseInt(this.range.style.getPropertyValue("--x-2"));
			newX = Math.min(newX, otherX - handleRect.width)
			newX = Math.max(newX, 0 - handleRect.width/2)
		} else {
			const otherX = parseInt(this.range.style.getPropertyValue("--x-1"));
			newX = Math.max(newX, otherX + handleRect.width)
			newX = Math.min(newX, parentRect.width - handleRect.width/2)
		}
		this.activeHandle.dataset.value = this.calcHandleValue((newX + handleRect.width/2) / parentRect.width)
		this.range.style.setProperty(property, newX + "px");

	}
	
	calcHandleValue(percentage) {
		return Math.round(percentage * (this.max - this.min) + this.min)
	}
	
	stopMove() {
		window.removeEventListener("mousemove", this.moveListener);
		window.removeEventListener("touchmove", this.moveTouchListener);
	}
}








