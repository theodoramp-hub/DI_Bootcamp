#Exercise 1 : Hello World-I love Python
print("Hello world\n"*3 + "I love python\n"*3)

#Exercise 2 : What is the Season ?
month=int(input('Enter a month (1 to 12): '))
if 3 <= month <= 5:
    print("Spring")
elif 6 <= month <= 8:
    print("Summer")
elif 9 <= month <= 11:
    print("Autumn")
elif 1<= month <=2 or month == 12:
    print("Winter")
else:
    print("Please enter a number from 1 to 12")