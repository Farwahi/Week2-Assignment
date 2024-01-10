function calculate() {
    const number = document.getElementById('number').value;
    const floor = Math.floor(number);
    const ceil = Math.ceil(number);
    const round = Math.round(number);
    document.getElementById('floor').textContent = floor;
    document.getElementById('ceil').textContent = ceil;
    document.getElementById('round').textContent = round;
  }
  