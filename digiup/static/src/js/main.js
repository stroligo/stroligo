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

// Função para abrir o modal
function openModal(message = '') {
  const modal = document.getElementById('myModal');
  const modalMessage = document.getElementById('modalMessage');
  modalMessage.textContent = message; // Definir a mensagem ao abrir o modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// Fechar o modal ao clicar fora do conteúdo do modal
document.addEventListener('click', (e) => {
  const modal = document.getElementById('myModal');
  if (e.target === modal) {
    closeModal();
  }
});

// Função para enviar o formulário via AJAX
document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch('send_email.php', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        openModal('E-mail enviado com sucesso!');
      } else {
        openModal('Erro ao enviar o e-mail. Tente novamente.');
      }
    })
    .catch((error) => {
      openModal('Erro ao enviar o e-mail. Tente novamente.');
    });
});
