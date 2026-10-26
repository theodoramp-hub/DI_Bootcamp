#Exercise1
name = input("What is your name? ")
len(name)
if len(name)<5:
    print('You have a short name :)')
else:
    print(f"Your name is {name}")
    
#Exercise
num = int(input("Give me a number between 1 and 100: "))
if num % 3 == 0 and num % 5 == 0:
    print("FizzBuzz")
elif num % 3 == 0:
    print("Fizz")
elif num % 5 == 0:
    print("Buzz")
