# #Challenge 1: Letter Index Dictionary
# #Create a dictionary that stores the indices (number of the position) of each letter in a word provided by the user(input()).

# #Ask the user to enter a word.
# word = input('Give me a word: ')

# letter_indices = {}

# for index, letter in enumerate(word):
#     if letter in letter_indices:
#         letter_indices[letter].append(index)
#     else:
#        letter_indices[letter] = [index]
# print(letter_indices)


#Challenge 2: Affordable Items

# Create a program that prints a list of items that can be purchased with a given amount of money.

items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"


clean_wallet = int(wallet.strip().replace("$", "").replace(",", ""))

basket = []
sorted_basket =sorted(basket)
for item, price in items_purchase.items():
    clean_price = int(price.strip().replace("$", "").replace(",", ""))

    if clean_price <= clean_wallet:
        basket.append(item)
        clean_wallet -= clean_price

sorted_basket =sorted(basket)
if basket == []:
    print('Nothing')
else:
    
    print(sorted_basket)
    print (clean_wallet)


items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
wallet = "$100"

clean_wallet = int(wallet.strip().replace("$", "").replace(",", ""))

basket = []
sorted_basket =sorted(basket)
for item, price in items_purchase.items():
    clean_price = int(price.strip().replace("$", "").replace(",", ""))

    if clean_price <= clean_wallet:
        basket.append(item)
        clean_wallet -= clean_price

sorted_basket =sorted(basket)
if basket == []:
    print('Nothing')
else:
    
    print(sorted_basket)
    print (clean_wallet)

items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
wallet = "$1"

clean_wallet = int(wallet.strip().replace("$", "").replace(",", ""))

basket = []
sorted_basket =sorted(basket)
for item, price in items_purchase.items():
    clean_price = int(price.strip().replace("$", "").replace(",", ""))

    if clean_price <= clean_wallet:
        basket.append(item)
        clean_wallet -= clean_price

sorted_basket =sorted(basket)
if basket == []:
    print('Nothing')
else:
    
    print(sorted_basket)
    print (clean_wallet)