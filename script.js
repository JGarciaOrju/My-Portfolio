// 🔹 Cambiar color de navbar al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// 🔹 Botón "ir arriba"
const btnTop = document.createElement('button');
btnTop.innerText = '⬆';
btnTop.id = 'btnTop';
document.body.appendChild(btnTop);

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// 🔹 Animación "máquina de escribir"
function typeWriter(element, text, speed = 100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
const heroText = document.querySelector('#hero h2 span');
heroText.innerHTML = '';
typeWriter(heroText, 'Tu Nombre');
