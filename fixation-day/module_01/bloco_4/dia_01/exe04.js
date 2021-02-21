let estado;

switch (estado) {
  case ('aprovado'):
    console.log('Parabéns, você foi aprovado!');
    break;
  case ('lista'):
    console.log('Você está na nossa lista de espera');
    break;
  case ('reprovado'):
    console.log('Você foi reprovado');
    break;
  default:
    console.log('Não se aplica');
}