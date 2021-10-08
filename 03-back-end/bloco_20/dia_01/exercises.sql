-- Exercise 1
SELECT
  MAX(SALARY)
FROM
  hr.employees;
-- Exercise 2
SELECT
  MAX(SALARY) - MIN(SALARY) AS diference
FROM
  hr.employees;
-- Exercise 3
SELECT
  JOB_ID,
  AVG(SALARY) AS average
FROM
  hr.employees
GROUP BY
  JOB_ID
ORDER BY
  average DESC;
-- Exercise 4
SELECT
  SUM(SALARY)
FROM
  hr.employees;
-- Exercise 5
SELECT
  MAX(SALARY),
  MIN(SALARY),
  SUM(SALARY),
  ROUND(AVG(SALARY), 2)
FROM
  hr.employees;
-- Exercise 6
SELECT
  COUNT(*)
FROM
  hr.employees
WHERE
  JOB_ID = 'IT_PROG';
-- Exercise 7
SELECT
  SUM(SALARY),
  JOB_ID
FROM
  hr.employees
GROUP BY
  JOB_ID;
-- Exercise 8
SELECT
  SUM(SALARY),
  JOB_ID
FROM
  hr.employees
GROUP BY
  JOB_ID
HAVING
  JOB_ID = 'IT_PROG';
-- Exercise 9
SELECT
  ROUND(AVG(SALARY), 2) AS media,
  JOB_ID
FROM
  hr.employees
GROUP BY
  JOB_ID
HAVING
  JOB_ID <> 'IT_PROG'
ORDER BY
  media DESC;
-- Exercise 10
SELECT
  ROUND(AVG(SALARY), 2),
  COUNT(*) AS func
FROM
  hr.employees
GROUP BY
  department_id
HAVING
  func > 10;
-- Exercise 11
UPDATE
  hr.employees
SET
  PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE
  PHONE_NUMBER LIKE '515%';
-- Exercise 12
SELECT
  *
FROM
  hr.employees
WHERE
  FIRST_NAME LIKE '________%';
-- Exercise 13
SELECT
  EMPLOYEE_ID,
  FIRST_NAME,
  YEAR(HIRE_DATE)
FROM
  hr.employees;
-- Exercise 14
SELECT
  EMPLOYEE_ID,
  FIRST_NAME,
  DAY(HIRE_DATE)
FROM
  hr.employees;
-- Exercise 15
SELECT
  EMPLOYEE_ID,
  FIRST_NAME,
  MONTH(HIRE_DATE)
FROM
  hr.employees;
-- Exercise 16
SELECT
  UCASE(FIRST_NAME)
FROM
  hr.employees;
-- Exercise 17
SELECT
  LAST_NAME,
  HIRE_DATE
FROM
  hr.employees
WHERE
  YEAR(HIRE_DATE) = 1987
  AND MONTH(HIRE_DATE) = 6;
-- Exercise 18
SELECT
  FIRST_NAME,
  LAST_NAME,
  DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS DAYS
FROM
  hr.employees;