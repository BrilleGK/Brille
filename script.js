function toggleChat() {
    var chatPopup = document.querySelector(".chat-popup");
    if (chatPopup.style.display === "none" || chatPopup.style.display === "") {
        chatPopup.style.display = "block";
    } else {
        chatPopup.style.display = "none";
    }
}

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

function backToMenu() {
    var chatBody = document.getElementById("chat-body");
    var menuButtons = document.getElementById("menu-buttons");

    // Limpar as respostas
    chatBody.innerHTML = "<p><strong>Maya:</strong> Olá! Como posso te ajudar? 😊</p>";

    // Exibir as opções de perguntas
    menuButtons.style.display = "flex";
}

// Correção do botão WhatsApp para evitar conflito com o chat
document.querySelector(".whatsapp-button").addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que o clique afete o chat
    window.open("https://api.whatsapp.com/send?phone=5519997763354", "_blank");
});
