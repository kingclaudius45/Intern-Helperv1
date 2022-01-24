const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


const toggle-button=$(".toggle-button")[0]
const navbar-links=$(".navbar-links")[0]

toggle-button.click(function(){
  navbarLinks.classList.toggle('active')
})
