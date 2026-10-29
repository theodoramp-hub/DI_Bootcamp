# Exercise 1: Favorite Numbers

my_fav_numbers = {2,12,16,27}
my_fav_numbers.add(4)
my_fav_numbers.add(9)
print(my_fav_numbers)
my_fav_numbers.remove(9)
print(my_fav_numbers)
friend_fav_numbers = {0,1,3,5}
our_fav_numbers = my_fav_numbers | friend_fav_numbers
print(our_fav_numbers)


# Exercise 2: Tuple

integers = (1,2,3,4,5)
#integers.add(6)
print(integers)  # error as tuples are immutable. Cannot be changed after creation


# Exercise 3: List Manipulation

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.pop(2)
basket.append("Kiwi")
basket.insert(1, "Apples")
x = basket.count("Apples")
print(x)
basket.clear()
print(basket)


# Exercise 4: List Manipulation

#float has decimal point while integer is a whole number


numbers = []
for n in range(3, 11):
    if n % 2 == 0:
        numbers.append(n//2)
    else:
        numbers.append(n/2)

print(numbers)


#Exercise 5: For Loop

n = 0
for n in range (0, 20):
    n += 1
    print(n)

n = 1
for n in range (1, 21):
    if n % 2 == 0:
          print(n)


#Exercise 6: While Loop

while True:
    name = input('Enter your name: ')
    if not name.isdigit() and len(name) >= 3:
        print('Thank you')
        break
    else:
        print('Try again')
        
        
# Exercise 7: Favorite Fruits   

fruits = input('Enter your favourite fruits seperated by ,: ')
fruitslist =list(fruits.split(','))
anyfruit = input('Enter any fruit: ')
if anyfruit in fruitslist:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")


#Exercise 8: Pizza Toppings

toppings = []
while True:
    topping = input('Enter your pizza toppings one by one. When finish type quit: ')
    if topping.lower() == 'quit':
        break
    else:
        toppings.append(topping)
        print(f"Adding {topping} to your pizza.")

print(f'You choose: {','.join(toppings)}')
cost = (10 + len(toppings)*2.50)
print(cost)

        
#Exercise 9: Cinemax Tickets

total = 0

while True:
    answer = input('Enter your age or done if finish: ')
    if answer.lower() == 'done':
        break
    age = int(answer)
    if age < 3:
        total += 0
    elif age <= 12:
        total += 10
    else:
        total += 15

print(f'Total cost: ${total}')

#Bonus

Attendees = []

while True:
    answer = input('Enter your age or done if finish: ')
    if answer.lower() == 'done':
        break
    age = int(answer)
    if 16 <= age <= 21:
        Attendees.append(answer)
  
print(f"Final List: {','.join(Attendees)}")