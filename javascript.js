// I need to put something like a hello world script here but I'm just gonna let you know what's going on in case you think I'm trying to take credit for amazon and facebook
alert(`If you check out my portfolio page, just know the grocery list is mine, the other sites are not of my design and I do not take credit for them`)

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})