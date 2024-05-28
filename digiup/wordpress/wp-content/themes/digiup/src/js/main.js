// Espera o DOM ser totalmente carregado para executar o código
document.addEventListener('DOMContentLoaded', function () {
  // Função para fechar o menu
  function fecharMenu() {
    const toggleMenuMobile = document.getElementById('toggle-menuMobile');
    toggleMenuMobile.checked = false; // Desativa o checkbox para fechar o menu
  }

  // Seleciona os elementos relevantes do DOM
  const toggleMenuMobile = document.getElementById('toggle-menuMobile'); // Checkbox para ativar/desativar o menu
  const menuMobile = document.querySelector('.menuMobile'); // Elemento do menu
  const menuItems = document.querySelectorAll('.menu-item a'); // Itens do menu
  const btnClose = document.querySelector('.btn-close'); // Botão de fechar o menu

  // Fecha o menu ao clicar em qualquer item do menu
  menuItems.forEach((item) => {
    item.addEventListener('click', function () {
      toggleMenuMobile.checked = false;
    });
  });

  // Fecha o menu ao clicar fora do menu ou no botão de fechar
  document.addEventListener('click', function (event) {
    if (
      (!menuMobile.contains(event.target) &&
        !toggleMenuMobile.contains(event.target)) || // Verifica se o clique não é dentro do menu ou no botão de ativar/desativar o menu
      event.target === btnClose // Verifica se o clique é no botão de fechar o menu
    ) {
      toggleMenuMobile.checked = false; // Fecha o menu
    }
  });
});
