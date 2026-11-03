# #Exercise 1 : When will I retire ?

# def get_age(year, month, day):
    
#     current_year = 2026
#     current_month = 11
#     current_day = 3
#     age = current_year - year
#     if month > current_month or (month == current_month and day > current_day):
#         age -= 1       
#     return age

# def can_retire(gender, date_of_birth):
#     year, month, day = map(int, date_of_birth.split("/"))
#     age = get_age(year, month, day)

#     if gender == "m" and age >= 67:
#         return True
#     elif gender == "f" and age >= 62:
#         return True
#     else:
#         return False


# date_of_birth = input("Enter your date of birth (yyyy/mm/dd): ").strip()
# gender = input("Enter your gender (m/f): ").strip().lower()

# if can_retire(gender, date_of_birth):
#     print("You can retire.")        
# else:
#     print("You cannot retire yet.")


#Exercise 2 : Sum
#Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.

# def sum_series(X):
#     return int((X + X*11 + X*111 + X*1111))
# print(sum_series(3))

#Exercise 3 : Double Dice

import random

from numpy import rint

def throw_dice():
    random_number = random.randint(1, 6)
    return random_number

# print(throw_dice())


def throw_until_doubles(): 
    throws = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        #print(f"Dice 1: {dice1}, Dice 2: {dice2}")          
        throws += 1
        if dice1 == dice2:
            break
    return throws

#print(f'The dice were thrown {throw_until_doubles()} times to get doubles.')

def main():
    times = range(100)
    throw_list = []
    for time in times:
        throw_list.append(throw_until_doubles())
        #print(f'The dice was thrown {throw_list[time]} times to get doubles.')
    total_throws = sum(throw_list)
    print(f'The total amount of throws it took to reach doubles is {total_throws}')
    average_throws = sum(throw_list) / len(throw_list)
    print(f'The average amount of throws it took to reach doubles is {average_throws:.2f}.')

main()