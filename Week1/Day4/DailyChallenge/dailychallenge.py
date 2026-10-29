#Challenge 1: Multiples of a Number

multiples= []

#Ask the user for two inputs:
number = int(input('Give me a number: '))
length = int(input('Give me a length: '))


for i in range (1, length + 1):
    multiples.append (number * i)
print(multiples)

#Challenge 2: Remove Consecutive Duplicate Letters

result = ''

#Ask the user for a string
string = (input('Give me a string: '))

for letter in string:
    if result and letter == result[-1]:
        continue
    result += letter
   
print(result)

