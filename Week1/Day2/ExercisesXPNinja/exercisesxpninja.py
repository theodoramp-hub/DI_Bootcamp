#Exercise 4 : How many characters in a sentence ?
3 <= 3 < 9   #True
3 == 3 == 3  #True
bool(0)      #False
bool(5 == "5")   #False
bool(4 == 4) == bool("4" == "4")  #False
bool(bool(None))  #True
x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10
print("x is", x)   #True
print("y is", y)   #False
print("a:", a)     #5
print("b:", b)     #10

#Exercise 4 : How many characters in a sentence ?
my_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
print(len(my_text))

#Exercise 5: Longest word without a specific character
longest = 0

while True:
    sentence = input('Enter the longest sentence they can without the character “A”: ')
    if "a" in sentence.lower():
        print("Your sentence contains an 'A'. Try again!")
    elif len(sentence) > longest:
        longest = len(sentence)
        print(f"Congratulations! New record: {longest} characters.")
    else:
        print(f"Not longer than your record of {longest}. Try again!")
print(f"Game over! Your best was {longest} characters.")1


        