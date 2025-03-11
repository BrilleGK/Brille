// Função para alternar a exibição do chat
function toggleChat() {
    var chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = chatPopup.style.display === "none" || chatPopup.style.display === "" ? "block" : "none";
}

// Função para alternar a exibição do WhatsApp
document.querySelector(".whatsapp-button").addEventListener("click", function(event) {
    event.stopPropagation(); // Evita conflito com o chatbot

    // Detectar se o dispositivo é móvel ou desktop
    var isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // URL com a mensagem para o WhatsApp
    var url = "https://api.whatsapp.com/send?phone=+5519997763354&text=Olá!%20Quero%20brilhar%20mais%20com%20a%20brillê.";

    if (isMobile) {
        // Se for um dispositivo móvel, abrir diretamente o WhatsApp com a mensagem
        window.location.href = url;
    } else {
        // Se for um desktop, abre o WhatsApp Web em uma nova aba
        window.open(url, "_blank");
    }
});

// Seleção da pergunta para o chatbot
function selectQuestion(question) {
    var chatBody = document.getElementById("chat-body");
    var menuButtons = document.getElementById("menu-buttons");

    // Limpar o conteúdo atual do chat
    chatBody.innerHTML = "";

    // Exibir a resposta e a opção de voltar
    var response = getBotResponse(question);
    chatBody.innerHTML += `<p><strong>Maya:</strong> ${response}</p>`;

    // Botão de voltar ao menu
    chatBody.innerHTML += `<button id="back-button" onclick="backToMenu()">🔙 Voltar ao menu</button>`;
    chatBody.scrollTop = chatBody.scrollHeight;

    // Esconder as perguntas
    menuButtons.style.display = "none";
}

// Respostas do chatbot com base na pergunta
function getBotResponse(question) {
    if (question === "horario") {
        return "Nosso atendimento é de segunda a sexta, das 9h às 18h.";
    } else if (question === "entrega") {
        return "O prazo de entrega varia de acordo com a sua localização. Normalmente entre 3 a 7 dias úteis.";
    } else if (question === "pagamento") {
        return "Aceitamos cartão de crédito, Pix e boleto bancário.";
    } else if (question === "troca") {
        return "Você pode solicitar troca ou devolução em até 7 dias após o recebimento.";
    } else {
        return "Desculpe, não entendi. Poderia reformular a pergunta? 😊";
    }
}

// Função para voltar ao menu do chatbot
function backToMenu() {
    var chatBody = document.getElementById("chat-body");
    var menuButtons = document.getElementById("menu-buttons");

    chatBody.innerHTML = "<p><strong>Maya:</strong> Olá! Como posso te ajudar? 😊</p>";
    menuButtons.style.display = "block";
}
