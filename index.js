function converter() {
  const temp = parseFloat(document.getElementById("temp").value);
  const unit = document.getElementById("unit").value;
  const resultado = document.getElementById("resultado");
  let converted;

  if (isNaN(temp)) {
    resultado.innerText = "Por favor, insira um número válido.";
    return;
  }

  switch (unit) {
    case "CtoF":
      converted = (temp * 9/5) + 32;
      resultado.innerText = `${temp}°C = ${converted.toFixed(2)}°F`;
      break;
    case "FtoC":
      converted = (temp - 32) * 5/9;
      resultado.innerText = `${temp}°F = ${converted.toFixed(2)}°C`;
      break;
    case "CtoK":
      converted = temp + 273.15;
      resultado.innerText = `${temp}°C = ${converted.toFixed(2)}K`;
      break;
    case "KtoC":
      converted = temp - 273.15;
      resultado.innerText = `${temp}K = ${converted.toFixed(2)}°C`;
      break;
    default:
      resultado.innerText = "Unidade de conversão inválida.";
  }
}
