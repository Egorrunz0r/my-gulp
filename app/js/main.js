const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault()
  btn.classList.toggle('active')
  
})