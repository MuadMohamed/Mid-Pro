const menu = document.querySelector('.menu');
const flexboxContainer = document.querySelector('.flexboxcontainer')
const toggleReveal = document.querySelector('#togglereveal');
const collapsibleContent = document.querySelector('#collapsiblecontent');
const menus = document.querySelector('.menus');
const navMenu = document.querySelector('.navmenu')
const togglesReveal = document.querySelector('#togglesreveal');
const collapsiblesContent = document.querySelector('#collapsiblescontent');

console.log(navMenu) //Need to fix (Not appearing)

toggleReveal.addEventListener('click', () => {
flexboxContainer.classList.toggle('show')
})


togglesReveal.addEventListener('click', () => {
    collapsiblesContent.classList.toggle('show')  // this toggle isn't appearing yet
    })