
/**
 * Para o calculo de porcetangem usei como base o código do Diego Serafim,
 * segue o link do código: https://forum.scriptbrasil.com.br/topic/102857-calculo-de-porcentagem-em-javascript/
 */


function calculateProfit() {
  let productCost = 20;
  let saleValue = 30;

  let costTax = productCost * (productCost/100);
  let totalCost = productCost + costTax;
  let profit = saleValue - totalCost;
  
  if (profit > 0) {
    console.log('Seu lucro é de: R$ ' + profit);
  } else {
    console.log('Você não teve lucro na venda deste produto');
  }
}

calculateProfit();