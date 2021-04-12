const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));