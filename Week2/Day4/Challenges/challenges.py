# Exercise 1
# Instructions
# Write a script that inserts an item at a defined index in a list.

my_list = input('Give me a list of items: ').split()
add_item = input('which item: ')
position = int(input('At which index? '))

my_list.insert(position, add_item)
print(my_list)


# Exercise 2
# Instructions
# Write a script that counts the number of spaces in a string.

