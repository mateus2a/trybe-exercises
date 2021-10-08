SELECT
  AVG(length) AS 'Média de Duração',
  MIN(length) AS 'Duração Mínima',
  MAX(length) AS 'Duracao Maxima',
  SUM(length) AS 'Tempo de Exibição Total',
  COUNT(title) AS 'Filmes Registrados'
FROM
  sakila.film;