const color = document.querySelector('#color');
const salida = document.querySelector('#salida');

const storage = JSON.parse(localStorage.getItem('colorValue')) || '#ffffff';
color.value = storage;

const setColor = () => {
    const select = color.value;
    salida.innerHTML = select;
    salida.style.background = select;


};

const saveColor = (select) => {
    colorList.push(select);
    localStorage.setItem('colorValue', JSON.stringify(colorList));
};

setColor();

color.addEventListener('input', setColor);
color.addEventListener('change', () => saveColor(color.value));

