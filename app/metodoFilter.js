const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exivirValorTotalDosLivrosDisponiveis(valorTotal)
    }
}

function filtrarPorDisponibilidade() {
    return livros.filter(livros => livros.quantidade > 0)
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livros => livros.categoria == categoria)
}

function exivirValorTotalDosLivrosDisponiveis(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}