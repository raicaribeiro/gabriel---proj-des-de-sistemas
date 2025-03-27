let recomendacoes = ["Vídeo1", "Video2", "Video3", "Video4"];
let contadorRemocoes = 0;

function removerUltimoVideo() {
    if (recomendacoes.length > 0) {
        recomendacoes.pop();
        contadorRemocoes++;    
    }
    if (contadorRemocoes === 3) {
        recomendacoes.push("NovoVídeoSugerido");
        contadorRemocoes = 0;
    }
    console.log("lista de recomendações:", recomendacoes);
}