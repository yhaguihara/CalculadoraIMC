const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = Number(document.getElementById('peso').value);
    const height = Number(document.getElementById('altura').value);

    if (!Number.isFinite(weight) || !Number.isFinite(height) || weight <= 0 || height <= 0) {
        return;
    }

    const imc = weight / (height * height);
    let description;

    if (imc < 18.5) {
        description = 'Abaixo do peso';
    } else if (imc < 25) {
        description = 'Peso normal';
    } else if (imc < 30) {
        description = 'Sobrepeso';
    } else if (imc < 35) {
        description = 'Obesidade grau I';
    } else if (imc < 40) {
        description = 'Obesidade grau II';
    } else {
        description = 'Obesidade grau III';
    }

    document.getElementById('valor').textContent = imc.toFixed(2);
    document.querySelector('#descricao span').textContent = description;
    document.getElementById('infos').classList.remove('hidden');
});