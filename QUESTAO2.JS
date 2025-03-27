let fila = [];
const LimiteAtendimento = 5;

function vindaCliente(cliente){
    fila.unshift(cliente);
    if (fila.lenght > limeteAtendimento) {
        fila.pop();
    }
    console.log("Fila atualizada:", fila);
}
