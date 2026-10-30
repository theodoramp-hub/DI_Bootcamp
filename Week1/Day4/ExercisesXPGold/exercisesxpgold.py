# #Exercise 1: Concatenate lists

# list1 = [1,2,3,]
# list2 = [4,5,6]

# list = list1 + list2
# print(list)

# #Exercise 2: Range of numbers

# for n in range(1500,2500):
#     if n % 5 == 0 and n % 7 == 0:
#         print(n)

# #Exercise 3: Check the index

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# #Ask a user for their name, 

# name = input('Write your name: ')

# # if their name is in the names list print out the index of the first occurence of the name.

# if name in names:
#     x = names.index(name)
#     print(x)

# #Exercise 4: Greatest Number
# #Ask the user for 3 numbers 

# numbers = input('Write 3 numbers: ')

# # Turn the text into a list of numbers

# list_numbers = []
# for piece in numbers.replace(',' , ' ').split():
#     list_numbers.append (int(piece))

# #Find the greatest number
# greatest = list_numbers [0]
# for n in list_numbers:
#     if n > greatest:
#         greatest = n

# # Print the greatest number
# print('The greatest number is:', greatest)

# # Exercise 5: The Alphabet
# # Create a string of all the letters in the alphabet


# alphabet = 'abcdefghijklmnopqrstuvwxyz'
# vowels = set('aeiou')

# for letter in alphabet:
#     if letter in vowels:
#         print(f'Thid {letter} is a vowel')
#     else:
#         print(f'Thid {letter} is a consonant')
   
# # Exercise 5B The Alphabet
# # Create a list of all the letters in the alphabet
# print(ord('a'))
# print(ord('z'))

# ascii_list =[]
# for num in range(97,123):
#     ascii_list.append(num)
# print((ascii_list))

# alpha_list = []
# for num in ascii_list:
#     alpha_list.append(chr(num))
# print(alpha_list)

# # Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

# Exercise 6: Words and letters

## Ask a user for 7 words, store them in a list named words.
# word =  input('Write 7 words: ')

# words = []
# for i in range(7):
#     word = input(f"Enter word {i+1}: ").strip()
#     words.append(word)

# print(words)


# #Ask the user for a single character, store it in a variable called letter.
# characters =  input('Write single character: ')

# letter = ''

# while len(letter) != 1:
#     letter = input("Enter a single character: ").strip()
#     if len(letter) != 1:
#         print("Please enter exactly one character.")

# # Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# for word in words:
#     index = word.find(letter)
#     if index != -1:
#         print(f"Word: {word}, Index: {index}")
#     else:
#         print(f"The letter '{letter}' was not found in the word '{word}'.")

# # If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

#Exercise 7: Min, Max, Sum
#Create a list of numbers from one to one million

# numbers = list(range(1, 1000001))

# print(min(numbers))
# print(max(numbers))
# print(sum(numbers))

#Exercise 8 : List and Tuple

# numbers = input('Write a sequence of comma-separated numbers. ')

# number_list = []

# for number in numbers.split(','):
#     number_list.append(number.strip())

# print(number_list)

# number_tuple = tuple(number_list)

# print(number_tuple)

# Exercise 9 : Random number

# Ask the user to input a number from 1 to 9 (including).
import random

numbers = input('Write a number from 1 to 9 (including). ')

x = random.randrange(1, 10)
print(x)

if x == int(numbers):
    print('Winner')
else:
    print('better luck next time.')


# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.