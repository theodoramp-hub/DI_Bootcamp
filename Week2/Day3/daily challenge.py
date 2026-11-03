import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728

seen = set()
for number in list_of_numbers:
    partner = target_number - number
    if  partner in seen:
        print(f'{partner} and {number} sums to the target_number {target_number})')
    seen.add(number)    
   