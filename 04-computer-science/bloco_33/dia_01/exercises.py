# Exercise 1
def highestNumber(numberOne, numberTwo):
    if (numberOne > numberTwo):
        return numberOne
    elif (numberOne < numberTwo):
        return numberTwo
    else:
        return "Os números são iguais"


print(highestNumber(11, 11))
