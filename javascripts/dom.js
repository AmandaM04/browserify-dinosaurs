const outputDiv = document.getElementById('dinos');
const domEvents = require('./events');

const domString = (dinos) => {
  let strang = '';
  dinos.forEach((dino) => {
    strang += `<h2>${dino.type}</h2>`;
  });
  return strang;
};

const printToDom = (dinoArray) => {
  outputDiv.innerHTML = domString(dinoArray);
  domEvents();
};

module.exports = printToDom;
