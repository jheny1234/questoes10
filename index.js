function calcularTempo() {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const velocidade = parseFloat(document.getElementById("velocidade").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(distancia) || isNaN(velocidade) || velocidade <= 0) {
    resultado.innerText = "Insira valores válidos.";
    return;
  }

  const tempo = distancia / velocidade;

  const horas = Math.floor(tempo);
  const minutos = Math.round((tempo - horas) * 60);

  resultado.innerText = `Tempo estimado: ${horas}h ${minutos}min`;
}
