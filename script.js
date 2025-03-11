// Função para alternar a exibição do chat
function toggleChat(event) {
    // Se event estiver definido, verifica se o clique foi no botão do WhatsApp ou no próprio chat
    if (event && event.target) {
        if (event.target.closest(".whatsapp-button") || event.target.closest(".chat-popup")) {
            return; // Não faz nada se o clique foi nesses elementos
        }
    }
    
    var chatPopup = document.getElementById("chat-popup");
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

// Função para voltar ao menu do chatbot (não fechar o chat)
function backToMenu() {
    var chatBody = document.getElementById("chat-body");
    var menuButtons = document.getElementById("menu-buttons");

    // Limpar as respostas e exibir a mensagem inicial do chatbot
    chatBody.innerHTML = "<p><strong>Maya:</strong> Olá! Como posso te ajudar? 😊</p>";
    menuButtons.style.display = "flex";
}

// Configuração do botão WhatsApp (mantém sua funcionalidade)
document.querySelector(".whatsapp-button").addEventListener("click", function(event) {
    event.stopPropagation(); // Evita conflito com o chatbot

    // Detectar se o dispositivo é móvel ou desktop
    var isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // URL com a mensagem para o WhatsApp (com o número correto)
    var url = "https://api.whatsapp.com/send?phone=5519997763354&text=Olá!%20Quero%20brilhar%20mais%20com%20a%20brillê.";

    if (isMobile) {
        window.location.href = url;
    } else {
        window.open(url, "_blank");
    }
});

// Evento global para alternar o chat (se o clique ocorrer fora dos elementos específicos)
document.addEventListener("click", toggleChat);
