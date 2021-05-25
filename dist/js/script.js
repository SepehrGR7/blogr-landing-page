const scrollNavbar = document.querySelector('.scroll-navbar')
const mobileMenu = document.querySelector('.mobile-menu')
const toggleBtn = document.querySelectorAll('.toggle-btn')
const accordions = document.querySelectorAll('.accordion')
const accordionToggles = document.querySelectorAll('.accordion-title')

// Show navbar on scroll
function showScrollNavbar() {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement

  scrollTop > 150
    ? scrollNavbar.classList.add('show')
    : scrollNavbar.classList.remove('show')
}

// Show mobile menu
function showMobileMenu(e) {
  mobileMenu.classList.toggle('show')
}

// Toggle collapse on accordion
function toggleCollapse(e) {
  accordions.forEach((acc, idx) => {
    const collapse = acc.querySelector('.collapse')
    if (
      e.target.parentElement.id === `accordion-${idx + 1}` ||
      e.target.parentElement.parentElement.id === `accordion-${idx + 1}`
    ) {
      acc.classList.toggle('open')
      collapse.style.maxHeight
        ? (collapse.style.maxHeight = null)
        : (collapse.style.maxHeight = `${collapse.scrollHeight}px`)
    } else {
      acc.classList.remove('open')
      collapse.style.maxHeight = null
    }
  })
}

// Event listeners
// Listen for scroll
window.addEventListener('scroll', showScrollNavbar)

// Toggle mobile menu on click
toggleBtn.forEach(btn => btn.addEventListener('click', showMobileMenu))

// Accordion event listener
accordionToggles.forEach(accordionToggle => {
  accordionToggle.addEventListener('click', toggleCollapse)
})
