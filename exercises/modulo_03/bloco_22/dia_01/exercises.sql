CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;
CREATE TABLE Gerente (
  gerente_id INTEGER NOT NULL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);
CREATE TABLE Animal (
  animal_id INTEGER NOT NULL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  especie VARCHAR(50) NOT NULL,
  sexo VARCHAR(50) NOT NULL,
  idade INTEGER NOT NULL,
  localizacao VARCHAR(50) NOT NULL
);
CREATE TABLE Cuidador (
  cuidador_id INT NOT NULL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  gerente_id INTEGER,
  FOREIGN KEY (gerente_id) REFERENCES Gerente (gerente_id)
);
CREATE TABLE Cuidador_Animal (
  animal_id INTEGER,
  cuidador_id INTEGER,
  FOREIGN KEY (animal_id) REFERENCES Animal (animal_id),
  FOREIGN KEY (cuidador_id) REFERENCES Cuidador (cuidador_id)
);