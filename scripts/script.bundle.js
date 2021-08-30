"use strict";

var color = document.querySelector('#color');
var salida = document.querySelector('#salida');
color.addEventListener('input', function () {
  var select = color.value;
  salida.innerHTML = select;
  salida.style.background = select;
  salida.style.color = '#fff';
});