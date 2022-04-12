# Exercise 1
def highestNumber(numberOne, numberTwo):
    if (numberOne > numberTwo):
        return numberOne
    elif (numberOne < numberTwo):
        return numberTwo
    else:
        return "Os números são iguais"


print(highestNumber(11, 11))

# Exercise 2


def media(list):
    sum = 0
    for num in list:
        sum += num
    return sum / len(list)


print(media([10, 20, 30]))
