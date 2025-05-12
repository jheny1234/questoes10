function somarMatrizes() {
  const a = [
    [parseFloat(document.getElementById('a00').value), parseFloat(document.getElementById('a01').value)],
    [parseFloat(document.getElementById('a10').value), parseFloat(document.getElementById('a11').value)]
  ];
  const b = [
    [parseFloat(document.getElementById('b00').value), parseFloat(document.getElementById('b01').value)],
    [parseFloat(document.getElementById('b10').value), parseFloat(document.getElementById('b11').value)]
  ];

  if (a.flat().some(isNaN) || b.flat().some(isNaN)) {
    alert("Preencha todos os campos com números válidos.");
    return;
  }

  const result = [
    [a[0][0] + b[0][0], a[0][1] + b[0][1]],
    [a[1][0] + b[1][0], a[1][1] + b[1][1]]
  ];

  document.getElementById('res00').textContent = result[0][0];
  document.getElementById('res01').textContent = result[0][1];
  document.getElementById('res10').textContent = result[1][0];
  document.getElementById('res11').textContent = result[1][1];
}