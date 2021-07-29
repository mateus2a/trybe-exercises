CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;
CREATE TABLE IF NOT EXISTS Employee (
  EmployeeId INTEGER PRIMARY KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  RegisterDate DATETIME
);
CREATE TABLE IF NOT EXISTS Contact (
  ContactId INTEGER PRIMARY KEY,
  Phone VARCHAR(50),
  Email VARCHAR(50),
  EmployeeId INTEGER,
  FOREIGN KEY (EmployeeId) REFERENCES Employee (EmployeeId)
);
CREATE TABLE IF NOT EXISTS Sector (
  SectorId INTEGER PRIMARY KEY,
  Name VARCHAR(50)
);
CREATE TABLE IF NOT EXISTS Employee_Sector (
  EmployeeId INTEGER,
  SectorId INTEGER,
  FOREIGN KEY (EmployeeId) REFERENCES Employee (EmployeeId),
  FOREIGN KEY (SectorId) REFERENCES Sector (SectorId)
);