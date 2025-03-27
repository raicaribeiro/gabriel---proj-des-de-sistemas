let estoque = ["escapamento1", "Motor2", "buzina3" ];
function atualizarEstoque(novaPeca) {
estoque.unshift(novaPeca);
estoque.pop();
console.log("Estoque atualizado:", estoque);
}