# Fixation 1
a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a ** b)
print(a % b)

# Fixation 2
hours = 6
minutes = 6 * 60
seconds = minutes * 60

print(hours)
print(minutes)
print(seconds)

# Fixation 4
book = 24.20
book_discount = (book * 0.4) - book
ship_books = (0.75 * 59) + 3
print(abs(book_discount * 60) + ship_books)

# Fixation 5
trybe_course = ["Introdução", "Front-end", "Back-end"]
trybe_course.append("Ciência da Computação")
print(trybe_course)

# Fixation 6
trybe_course[0] = "Fundamentos"
print(trybe_course)

# Fixation 7
var = set()
var.add("Mateus")
print(var)

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Fixation 9
info["recorrente"] = "Sim"

print(info)

# Fixation 10
del info["origem"]

print(info)
