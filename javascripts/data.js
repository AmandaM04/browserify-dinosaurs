const loadDinos = require('./dinosaurs');
const printToDom = require('./dom');

let dinoArray = [];

const whenDinosLoad = function () {
  dinoArray = JSON.parse(this.responseText).dinosaurs;
  printToDom(dinoArray);
};

const badDinos = function () {
  console.log('shit broke');
};

const initializer = () => {
  loadDinos(whenDinosLoad, badDinos);
};

const getDinos = () => {
  return dinoArray;
};
module.exports = {
  initializer,
  getDinos,
};
