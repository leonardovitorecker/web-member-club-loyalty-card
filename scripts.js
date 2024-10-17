document.getElementById("search-id-card").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const cardId = event.target.value.trim();
        clearMessages();
        // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
        if (cardId && !isNaN(cardId)) {
            getClient(cardId);
        } else {
            showError('Por favor, insira um ID válido.');
        }
    }
});

function showError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "flex";
    errorMessage.textContent = message;
}

function clearMessages() {
    // Limpa o conteúdo anterior
  
}

function getClient(cardId) {

    fetch(`http://localhost:3000/clients/${cardId}`)
        .then(response => {
            if (!response.ok) {
                showError('Cliente não encontrado');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('Erro:', error);
            showError('Por favor, insira um ID válido.');
        });
}