#Exercise 1: Converting Lists into Dictionaries

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result =dict(zip(keys, values))

print(result)


#Exercise 2: Cinemax #2


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15
    print(f"{name.capitalize()} pays ${price}")
    total_cost += price

print(f"Total cost is ${total_cost}")


#Exercise 2: Cinemax #2 - BONUS

family2 = {}
while True:
    name = input("Write name or 'done' if finish: ")
    if name.lower() == 'done':
        break
    age = int(input(f"Write age for {name}: "))
    family2[name] = age

total_cost2 = 0
for name, age in family2.items():
        if age < 3:
            price = 0
        elif age <= 12:
            price = 10
        else:
            price = 15
        print(f"{name.capitalize()} pays ${price}")
        total_cost2 += price

print(f"Total cost is ${total_cost2}")


#Exercise 3: Zara

#Create a dictionary called brand with the provided data.
brand = {
    'name': 'Zara',      
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green']
    }
}
print(brand)

#Change the value of number_stores to 2.
brand['number_stores'] = 2
print(brand)

#Print a sentence describing Zara’s clients using the type_of_clothes key.
print('Zara serves clients interested in:', ', '.join(brand['type_of_clothes']))

#Add a new key country_creation with the value Spain.
brand['country_creation'] = 'Spain'
print(brand)

#Check if international_competitors exists and, if so, add “Desigual” to the list.
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')
print(brand)

#Delete the creation_date key.
del brand['creation_date']
print(brand)

#Print the last item in international_competitors.
print(brand['international_competitors'][-1])

#Print the major colors in the US.
print(brand['major_color']['US'])

#Print the number of keys in the dictionary.
print(len(brand))

#Print all keys of the dictionary.
print(list(brand.keys()))

#
more_on_zara = {     
    'creation_date': 1975,
    'number_stores': 7000,
}

brand | more_on_zara
print(brand)