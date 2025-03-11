// Toggle o chat
function toggleChat() {
    const chatPopup = document.getElementById("chat-popup");
    if (chatPopup.style.display === "block") {
      chatPopup.style.display = "none";
    } else {
      chatPopup.style.display = "block";
    }
  }
  
  // Função de resposta do chatbot
  function selectQuestion(question) {
    const chatBody = document.getElementById('chat-body');
    const menuButtons = document.getElementById('menu-buttons');
    
    chatBody.innerHTML = `<p><strong>Maya:</strong> ${getBotResponse(question)}</p>`;
    chatBody.innerHTML += `<button onclick="backToMenu()">🔙 Voltar ao menu</button>`;
    menuButtons.style.display = 'none';
  }
  
  // Respostas do chatbot
  function getBotResponse(question) {
    switch (question) {
      case 'horario':
        return 'Nosso horário de atendimento é de segunda a sexta-feira, das 9h às 18h.';
      case 'entrega':
        return 'O prazo de entrega pode variar entre 3 a 7 dias úteis, dependendo da sua localização.';
      case 'pagamento':
        return 'Aceitamos pagamento via Pix, cartão de crédito e boleto bancário.';
      case 'troca':
        return 'Você pode realizar trocas em até 7 dias após o recebimento do produto.';
      default:
        return 'Desculpe, não entendi. Por favor, reformule sua pergunta.';
    }
  }
  
  // Voltar ao menu principal do chatbot
  function backToMenu() {
    const chatBody = document.getElementById('chat-body');
    const menuButtons = document.getElementById('menu-buttons');
    
    chatBody.innerHTML = `<p><strong>Maya:</strong> Olá! Como posso te ajudar? 😊</p>`;
    menuButtons.style.display = 'flex';
  }
  
  // WhatsApp - Link Dinâmico
  document.querySelector(".whatsapp-button").addEventListener("click", function(event) {
    event.preventDefault();
    
    const whatsappNumber = "5519997763354"; // Seu número de WhatsApp
    const message = encodeURIComponent("Olá! Quero Brilhar mais com Brillê.");
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  
    // Redireciona para o WhatsApp
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  });
  