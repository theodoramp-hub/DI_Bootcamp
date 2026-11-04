import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

### YOUR CODE STARTS FROM HERE ###

letters = list(word)
print(letters)

def make_stars(word):
    stars_word =[]
    for char in word:
        if char == ' ':
            stars_word.append(' ')
        else:
            stars_word.append('*')
    return stars_word
              
def guess_letter(word, display ):
    letter_guess = input('Guess a letter: ').lower()
    found = False
    for i, ch in enumerate(word):   # i = box number, ch = letter in the box
        if ch == letter_guess:               # does this letter match the guess?
            display [i] = ch
            found =True
    return found


body_parts = ['head', 'body', 'left arm', 'right arm', 'left leg', 'right leg']

display = make_stars(word)
mistakes = 0

while '*' in display and mistakes < 6:         # blank 1: how many body parts?
    print(' '.join(display))
    found = guess_letter(word, display)
    if not found:
        mistakes += 1                        # blank 2: which variable grows?
        print('Wrong! Gallows:', body_parts[:mistakes])   # blank 3: how many parts to show?

if '*' not in display:
    print('You win! The word was', word)
else:
    print('You lose! The word was', word)          # blank 4: the secret word




    




