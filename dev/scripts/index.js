import ScrollReveal from 'scrollreveal/src/scrollreveal'
import SmoothScroll from 'smooth-scroll/src/js/smooth-scroll'

const scroll = new SmoothScroll('a[href*="#"]')

// ---
// On-scroll animations:

window.sr = ScrollReveal({
  scale: 1
})

sr.reveal('.hero-section .container > *', 250)
sr.reveal('.section__header')
sr.reveal('.card', 250)

// ---
// Main navigation:

const navTrigger = document.querySelector('.main-nav__trigger')
const navItems = document.querySelectorAll('.main-nav__item')

function toggleNav() {
  const nav = document.querySelector('.main-nav')
  nav.classList.toggle('is-active')
}

navTrigger.addEventListener('click', toggleNav)
navItems.forEach(navItem => navItem.addEventListener('click', toggleNav))


// ---
// Tabs:

const tabs = document.querySelectorAll('.tab-header')

function switchTab(e) {
  e.preventDefault()
  const current = document.querySelector('.tab-header.is-active')

  current.classList.remove('is-active')
  this.classList.add('is-active')

  const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth

  if (width <= '1150') {
    scroll.animateScroll(this)
  }
}

tabs.forEach(tab => tab.addEventListener('click', switchTab))
tabs.forEach(tab => tab.href = '')
