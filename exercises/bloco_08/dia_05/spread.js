// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Kiwi', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Suco de Laranja', 'Leite Condensado', 'Leite em pó'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));