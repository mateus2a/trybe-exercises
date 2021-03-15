
let values = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
let titles = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const select = document.getElementById('state');


/* Source: https://stackoverflow.com/questions/57903061/foreach-loop-through-two-arrays-at-the-same-time-in-javascript */
titles.forEach((element, index) => {
  const option = document.createElement('option');
  option.innerText = element;
  option.value = values[index];
  select.appendChild(option);
});
const btnEnviar = document.getElementById('button');

let dataentrada = document.getElementById('date');

/* Source: https://www.guj.com.br/t/resolvido-como-validar-data-com-java-script/276656/13 */
function isDate() {
  
  if (dataentrada == ""){
    alert ('Preencha o campo com a data de entrada');    
    form_registra_entrada.dataentrada.focus();
    return false;
  }
    
  let patternData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

  if (!patternData.test(dataentrada)){
      alert("Digite a data no formato Dia/Mês/Ano");
    form_registra_entrada.dataentrada.focus();
      return false;
  }
}


btnEnviar.addEventListener('click', isDate );
