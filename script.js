// Função para alternar a exibição do chat
function toggleChat(event) {
    var chatPopup = document.querySelector(".chat-popup");

    // Verifica se o clique foi fora do chat ou no botão do WhatsApp
    if (event && (event.target.closest(".whatsapp-button") || event.target.closest(".chat-popup"))) {
        return;
    }

    // Alterna a exibição do chat
    if (chatPopup.style.display === "none" || chatPopup.style.display === "") {
        chatPopup.style.display = "block";
    } else {
        chatPopup.style.display = "none";
    }
}

// Seleção da pergunta para o chatbot
function selectQuestion(question) {
    var chatBody = document.getElementById("chat-body");
    var menuButtons = document.getElementById("menu-buttons");

    // Limpar o conteúdo atual do chat
    chatBody.innerHTML = "";

    // Exibir a resposta e a opção de voltar
    var response = getBotResponse(question);
    chatBody.innerHTML += `<p><strong>Maya:</strong> ${response}</p>`;
    chatBody.innerHTML += `<button id="back-button" onclick="backToMenu()">Voltar ao menu</button>`;

    menuButtons.style.display = "none";
}

// Função de resposta do bot para diferentes perguntas
function getBotResponse(question) {
    switch (question) {
        case 'horario':
            return "Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.";
        case 'entrega':
            return "O prazo de entrega é de 3 a 5 dias úteis.";
        case 'pagamento':
            return "Aceitamos cartões de crédito, débito e boleto bancário.";
        case 'troca':
            return "A troca pode ser feita até 7 dias após o recebimento do produto.";
        default:
            return "Desculpe, não entendi sua pergunta.";
    }
}

// Voltar ao menu principal
function backToMenu() {
    var chatBody = document.getElementById("chat-body");
    var menuButtons = document.getElementById("menu-buttons");

    chatBody.innerHTML = "<p><strong>Maya:</strong> Olá! Como posso te ajudar? 😊</p>";
    menuButtons.style.display = "block";
}

// Verificar se o usuário está em um dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar o comportamento do botão do WhatsApp dependendo do dispositivo
if (isMobile()) {
    var whatsappButton = document.querySelector(".whatsapp-button");
    whatsappButton.addEventListener("click", function () {
        window.location.href = "https://wa.me/1234567890"; // Substitua pelo seu número de WhatsApp
    });
}

document.addEventListener("click", toggleChat);
