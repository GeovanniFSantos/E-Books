let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livorsOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livorsOrdenados)
}