# Daily Challenge: String

import random

# Ask for a string of exactly 10 characters
user_string = input('Add a string which must be exactly 10 characters long: ')

# Check length
if len(user_string) < 10:
    print("String not long enough.")
elif len(user_string) > 10:
    print("String too long.")
else: 
    print("Perfect string")

        # Print first and last character
    print(user_string[0])
    print(user_string[-1])

    # Build the string one character at a time
    built = ''
    for char in user_string:
        built += char
        print(built)

    # Bonus: jumble the characters
    chars = list(user_string)
    random.shuffle(chars)
    jumbled = "".join(chars)
    print(jumbled)
