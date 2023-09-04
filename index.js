// verificando se o elemento está visível na tela
function elementoVisivel(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Função para iniciar a animação quando o elemento estiver visível
  function animateOnScroll() {
    const elementos = document.querySelectorAll('.elemento-animado');
    for (let elemento of elementos) {
        if (elementoVisivel(elemento)) {
          elemento.style.animation = 'anima-circulo 0.3s linear forwards'; // ou elemento.style.display = 'block';
        } else {
            elemento.style.animation = 'none';
        }
    }
  }
  
  // Adicionando um ouvinte de evento para verificar quando a página é rolada
  window.addEventListener('scroll', animateOnScroll);
  