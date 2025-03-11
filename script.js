// Função para alternar a exibição do chat
function toggleChat() {
    var chatPopup = document.querySelector(".chat-popup");
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

    // Limpar as respostas
    chatBody.innerHTML = "<p><strong>Maya:</strong> Olá! Como posso te ajudar? 😊</p>";

    // Exibir as opções de perguntas
    menuButtons.style.display = "flex";
}

// Correção do botão WhatsApp para enviar a mensagem
document.querySelector(".whatsapp-button").addEventListener("click", function(event) {
    event.stopPropagation(); // Evita conflito com o chatbot
    var url = "https://api.whatsapp.com/send?phone=5519997763354&text=Olá!%20Quero%20brilhar%20mais%20com%20a%20brillê."; // Link com a mensagem
    window.open(url, "_blank");
});

// Função para garantir que o chatbot seja alternado corretamente
function toggleChat(event) {
    // Verifica se o clique foi fora do chatbot ou no botão de WhatsApp
    if (event.target.closest(".whatsapp-button") || event.target.closest(".chat-popup")) {
        return; // Não faz nada se o clique foi no WhatsApp ou no chat
    }
    
    var chatPopup = document.querySelector(".chat-popup");
    if (chatPopup.style.display === "none" || chatPopup.style.display === "") {
        chatPopup.style.display = "block";
    } else {
        chatPopup.style.display = "none";
    }
}

// Adicionando o evento para chamar toggleChat
document.addEventListener("click", toggleChat);

// Inicializar o chat com a mensagem de boas-vindas
document.addEventListener("DOMContentLoaded", function() {
    var chatBody = document.getElementById("chat-body");
    chatBody.innerHTML = "<p><strong>Maya:</strong> Olá! Como posso te ajudar? 😊</p>";
});
