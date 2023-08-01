const btnAllFilter = document.querySelectorAll('.btn');

btnAllFilter.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementBtn = document.getElementById(this.id)
    const categoria = elementBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livrosPorDisponibilidade() : livrosPorCategoria(categoria)

    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDosLivrosDisponivel(livrosFiltrados)
        exibirValorTotaldoLivrosDisponivel(valorTotal)
    }
}

function livrosPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function livrosPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotaldoLivrosDisponivel(valorTotal) {
    elementoComValorTOtalDisponivel.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}