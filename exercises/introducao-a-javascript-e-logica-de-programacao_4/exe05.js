let infoOne = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim',
};

let infoTwo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim',
};

function isRecorret() {
  if(infoOne.recorrente === 'Sim' && infoTwo.recorrente === 'Sim') {
    recorrent = 'Ambos recorrentes';
    return recorrent;
  }
}


console.log(infoOne.personagem + ' e ' + infoTwo.personagem);
console.log(infoOne.origem + ' e ' + infoTwo.origem + ', ' + infoTwo.nota);
console.log(infoOne.nota + ' e ' + infoTwo.nota);
console.log(isRecorret());

