function verificarVitoria() {
    const combinacoes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of combinacoes) {
        const [a, b, c] = combo;
        if (
            boxes[a].textContent &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[a].textContent === boxes[c].textContent
        ) {
            return boxes[a].textContent;
        }
    }
    return null;
}

function atualizarVez() {
    vezTexto.textContent = `Vez do jogador: ${jogador}`;
}