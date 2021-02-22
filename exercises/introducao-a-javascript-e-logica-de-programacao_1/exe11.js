let grossSalary = 3700.00;

let aliquotINSS;
let aliquotIR;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  console.log('Exempt from income tax');
} else if (baseSalary <= 2826.65) {
  aliquotIR = baseSalary * 0.075 - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = baseSalary * 0.15 - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = baseSalary * 0.225 - 636.13;
} else {
  aliquotIR = baseSalary * 0.275 - 869.36;
}

let liquidSalary = baseSalary - aliquotIR;

console.log('Your liquid salary is R$ ' + liquidSalary);