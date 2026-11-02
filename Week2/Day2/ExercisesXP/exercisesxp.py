#Exercise 1: What Are You Learning?
#Goal: Create a function that displays a message about what you’re learning.

#defining the function with no parameters

def display_message():                                  #defin the function with no parameters
    print("I am learning about functions in Python")    #Print a Message

display_message()                                       #Call the function


#Exercise 2: What’s Your Favorite Book?
#Goal: Create a function that displays a message about a favorite book.

def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book("Alice in Wonderland")

#Exercise 3: Some Geography
# #Goal: Create a function that describes a city and its country.

def describe_city(city, country = "Unknown"):
    print(f'{city} is in {country}.')

describe_city("Reykjavik", "Iceland")
describe_city("Paris")

# Exercise 4: Random
# Goal: Create a function that generates random numbers and compares them.

import random

def number_guessing():
    number = int(input("Enter a number between 1 and 100: "))
    random_number =(random.randint(1, 100))
    print (random_number)
    if number == random_number:
        print("You guessed the number!")   
    else:        
        print(f"The random number was {random_number} and you choose {number}. Try again!") 

number_guessing()


# Exercise 5: Let’s Create Some Personalized Shirts!
# Goal: Create a function to describe a shirt’s size and message, with default values.

def make_shirt(size='large', text='I love Python'):
    print(f"The size of the shirt is {size} and the text on the shirt is '{text}'.")

make_shirt("M", "Hello World")
make_shirt('large')
make_shirt('medium')
make_shirt('small', " Custom message")
make_shirt(size="small", text="Hello!") 

#Exercise 6: Magicians…
# Goal: Modify a list of magician names and display them in different ways.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magician_names):
    for name in magician_names:
        print(name)

show_magicians(magician_names)        

def show_magicians(magician_names):
    for name in magician_names:
        print(name)

def make_great(magician_names):
    for name in magician_names:
        print(f"{name} the Great")

make_great(magician_names)
show_magicians(magician_names)

# Exercise 7: Temperature Advice
# Goal: Generate a random temperature and provide advice based on the temperature range.

import random

def get_random_temp():
    return random.uniform(-10, 40)

def main():
    random_temperature = round(get_random_temp(), 1)
    print(f'The  temperature  right now is {random_temperature} degrees Celsius')
    if random_temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= random_temperature < 16:
        print("Quite chilly! Don’t forget your coat.")    
    elif 16 <= random_temperature < 23: 
        print("Nice weather.")
    elif 23 <= random_temperature < 32:
        print("A bit warm, stay hydrated.")
    elif 32 <= random_temperature <= 40:
        print("It’s really hot! Stay cool.")
    else:
        print("Temperature is out of range.")

main()


# Step 5

import random 

def get_random_temp(low, high):
    return random.uniform(low, high)

def get_temp_for_month():
    while True:
        month = input(f'Enter the current month: ').strip().title()
        if month in ["December", "January", "February"]:
            return get_random_temp(-10, 0)
        elif month in ["March", "April", "May"]:
            return get_random_temp(1, 15)
        elif month in ["June", "July", "August"]:
            return get_random_temp(16, 23)
        elif month in ["September", "October", "November"]:
            return get_random_temp(24, 40)
        else:
            print("Invalid month. Please enter a valid month.")

    
def main():
    random_temperature = round(get_temp_for_month(), 1)
    print(f'The  temperature  right now is {random_temperature} degrees Celsius')
    if random_temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= random_temperature < 16:
        print("Quite chilly! Don’t forget your coat.")    
    elif 16 <= random_temperature < 23: 
        print("Nice weather.")
    elif 23 <= random_temperature < 32:
        print("A bit warm, stay hydrated.")
    elif 32 <= random_temperature <= 40:
        print("It’s really hot! Stay cool.")
    else:
        print("Temperature is out of range.")

main()
