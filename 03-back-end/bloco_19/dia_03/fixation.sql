-- Exercise 1
SELECT * FROM pecasfornecedores.pecas WHERE name LIKE 'Gr%';

-- Exercise 2
SELECT * FROM pecasfornecedores.fornecimentos WHERE peca = 2;

-- Exercise 3
SELECT peca, preco, fornecedor FROM pecasfornecedores.fornecimentos WHERE fornecedor LIKE '%N%';

-- Exercise 4
SELECT * FROM pecasfornecedores.fornecedores WHERE name LIKE '%LTDA%' ORDER BY name ASC;

-- Exercise 5
SELECT COUNT(*) FROM pecasfornecedores.fornecedores WHERE code LIKE '%F%';

-- Exercise 6
SELECT * FROM pecasfornecedores.fornecimentos WHERE preco >= 15 and preco <= 40 ORDER BY preco ASC;

-- Exercise 7
SELECT COUNT(*) FROM pecasfornecedores.vendas WHERE order_date BETWEEN '2018-07-30' AND '2019-07-30';
