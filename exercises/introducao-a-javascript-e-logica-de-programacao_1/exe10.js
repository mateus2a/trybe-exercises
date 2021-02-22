let productCost = 20;
let saleValue = 30;

let costTax = productCost * (20/100);
let totalCost = productCost + costTax;
let profit = saleValue - totalCost;

if (profit > 0) {
  console.log('Seu lucro é de: R$ ' + profit);
} else {
  console.log('Você não teve lucro na venda deste produto');
}
