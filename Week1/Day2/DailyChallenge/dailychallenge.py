import random

user_string = input('Add a string which must be exactly 10 characters long: ')
if len(user_string) < 10:
    print("String not long enough.")
elif len(user_string) > 10:
    print("String too long.")
else: 
    print("Perfect string")
    print(user_string[0])
    print(user_string[-1])

built = ''
for char in user_string:
    built += char
    print(built)

chars = list(user_string)
random.shuffle(chars)
jumbled = "".join(chars)
print(jumbled)
