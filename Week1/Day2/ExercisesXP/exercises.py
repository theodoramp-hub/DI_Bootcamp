#Exercise 1: Hello World

print("Hello world\n"*4)


#Exercise 2: Some Math

print((99**3)*8)


#Exercise 3: What is the output?

print(5 < 3)  #False
print(3 == 3)  #True
print(3 == "3")  #False
print("3" > 3)  #TypeError
print("Hello" == "hello")  #False


#Exercise 4: Your computer brand

computer_brand = "HP"
print(f"I have a {computer_brand} computer")


#Exercise 5: Your information

name = "Theodora"
age = 46
shoe_size = 39
info =f'My name is {name}, i am {age} years old, and my shoe size is {shoe_size}' 
print(info)

#Exercise 6: A & B
a = 5
b = 3
if a > b:
    print ("Hello world")


#Exercise 7: Odd or Even

num = int(input('Give me a number: '))
if num % 2 == 0:
    print("The number is even")
else:
    print("The number is odd")


#Exercise 8: What’s your name?

myname = "Theodora"
name = input('What is your name: ')
if name == myname:
    print(f"{name}, we have the same name")
else:
    print(f"{name} you have a beautiful name")


#Exercise 9: Tall enough to ride a roller coaster

height = int(input('What is your height in cm: '))
if height > 145:
    print(f"Your height is {height} cm, you are tall enough to ride")
else:
     print(f"Your height is {height} cm, you  need to grow some more to ride")