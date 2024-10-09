//seleciona a imagem principal
const imagemPrincipal = document.getElementById('imagem-principal');

//seleciona todas as miniaturas
const miniaturas = document.querySelectorA11('.miniatura');

//adiciona um evento de cliques para cada miniatura
miniaturas.forEach(miniatura => {
  miniatura.addEventListener('click', function() {
    //pega o valor do atributo 'data-imagem' da miniatura clicada
    const novaImagem = this.getAttribute('data-imagem');

    //substituui a imagem principal pela imagem da miniatura clicada 
    imagemPrincipal.src = novaImagem;
  });
});