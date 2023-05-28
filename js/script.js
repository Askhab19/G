



const menu = document.querySelector('.header__menu')

function menuBurger(e) {
  if (e.target.closest('.header__menu span')) {
    menu.classList.toggle('_active')
  }
  if (!e.target.closest('.header__menu')) {
    menu.classList.remove('_active')
  }
}

document.addEventListener('click', menuBurger)
document.addEventListener('keyup', function (e) {
  if (e.code === 'Escape') {
    menu.classList.remove('_active')
  }
})

























// const menu = document.querySelector('.menu');

// function menuClick(e) {
//   if (e.target.closest('.menu__button')) {
//     menu.classList.toggle('_active')
//   }
//   if (!e.target.closest('.menu')) {
//     menu.classList.remove('_active')
//   }
// }

// document.addEventListener('click', menuClick)
// document.addEventListener('keyup', function (e) {
//   if (e.code === 'Escape') {
//     menu.classList.remove('_active')

//   }
// })










// Создаю счётчик
// const txtItem = document.querySelector('.menu__search')
// const txtItemLimit = txtItem.getAttribute('maxlength')
// const txtCounter = document.querySelector('.search__counter span')

// txtCounter.innerHTML = txtItemLimit

// function txtSetCounter() {
//   const txtCounterResult = txtItemLimit - txtItem.value.length
//   txtCounter.innerHTML = txtCounterResult
// }

// txtItem.addEventListener('keyup', txtSetCounter)
// txtItem.addEventListener('keydown', function (e) {
//   if (e.repeat) { txtSetCounter() }
// })

// Создаю открывающееся/закрывающееся меню (закрываться будет и при нажатии на Escape)
// const menuBody = document.querySelector('.menu')

// function menu(e) {
//   if (e.target.closest('.menu__button')) {
//     menuBody.classList.toggle('_active')
//   }
//   if (!e.target.closest('.menu')) {
//     menuBody.classList.remove('_active')
//   }
// }

// document.addEventListener('click', menu)
// document.addEventListener('keyup', function (e) {
//   if (e.code === 'Escape') {
//     menuBody.classList.remove('_active')
//   }
// })




























