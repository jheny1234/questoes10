function converterMoeda() {
  const valor = parseFloat(document.getElementById("valor").value);
  const de = document.getElementById("de").value;
  const para = document.getElementById("para").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultado.innerText = "Por favor, insira um valor válido.";
    return;
  }

  // Taxas de câmbio fixas (exemplo)
  const taxas = {
    BRL: { USD: 0.20, EUR: 0.18, BRL: 1 },
    USD: { BRL: 5.00, EUR: 0.90, USD: 1 },
    EUR: { BRL: 5.50, USD: 1.10, EUR: 1 }
  };

  const convertido = valor * taxas[de][para];

  resultado.innerText = `${valor.toFixed(2)} ${de} = ${convertido.toFixed(2)} ${para}`;
}