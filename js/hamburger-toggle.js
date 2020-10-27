const btn = document.querySelector('#burger');
const nav = document.querySelector('nav');

btn.addEventListener('click', () =>{
  btn.classList.toggle('active');
  nav.classList.toggle('show');
});
