const no = document.querySelector('.no')
const yes = document.querySelector('.yes')
const foto = document.querySelector('.foto')

no.addEventListener('click', () => {

  foto.style.display = 'block'

    // Obtém a largura e altura da janela do navegador
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Calcula uma posição aleatória para o botão dentro da janela do navegador
    var newLeft = Math.floor(Math.random() * (windowWidth - no.offsetWidth));
    var newTop = Math.floor(Math.random() * (windowHeight - no.offsetHeight));

    // Define as novas coordenadas do botão
    no.style.position = 'absolute'; // Define a posição como absoluta
    no.style.left = newLeft + 'px';
    no.style.top = newTop + 'px';
});

yes.addEventListener('click', ()=> {
    window.location.href = 'https://youtu.be/6M2PAXsUjj4?si=ZY9R5DC4Mn8A6oUH';
})