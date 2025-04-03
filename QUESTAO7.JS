function manageQueue(queue) {
    if (queue.length >= 3) {
        queue.shift(); // Remove o primeiro jogador
    } else {
        queue.unshift("Novo Jogador"); // Adiciona um novo jogador se tiver menos de 3
    }
    return queue;
}
