# #Exercise 1 : Create a function that takes two numbers as arguments and returns their sum and difference.
# def calculation(a,b):
#     return a+b, a-b

# result = calculation (40,10)
# print(result)

# #Examples from class

# square = lambda n : n*n
# num = square(5)
# print(num)

# sub = lambda x, y : x-y
# print(sub(5, 3))


# lst = [1, 2, 3, 4, "a", "b", "c", 38.5, "56.7"]
# print(lst)
# print(type(lst))
# print(type(lst[-1])) 

# l1 = [1, 2, 3, 4, 5, 6]
# l1.append(3)
# l1.append([7, 8, 9])
# l1.extend([6, 7, 8])
# print(l1)

# l1=[1, 2, 3, 4, 5, 6]
# l1.insert(2, 6)
# print(l1)

# l2 = [1, 2, 3, 4, 5, "a", "a", "b", 1, 2, 4]
# s = l2.count(4)
# print(s)

# a = ["b", "g", "a", "d", "f", "c", "h", "e"]
# x = sorted(a)
# print("a after sorted function")
# print(a)
# print(x)
# b = [1, 2, 5, 8, 3]
# b.sort()
# print(b)


# lst = [1, 2, 3, 4, 5, 6, 7]
# print(lst[0:4])
# print(lst[::])
# print(lst[::-1])
# print(lst[::2])
# print(lst[::-2])
# print(lst[1:6:2])

# lst = [1, 2, 3, 4, 5, 6, 7]
# print(lst.pop())
# print(lst)
# lst.remove(4)
# print(lst) 
# lst.clear()
# print(lst)


# t = (1, 2, 3, 4, 5, "a", "b", "c")
# t1 = 1, 2, 3, 4, "g", "l"
# print(t)
# print(t1)
# print(len(t))

# t1 = (1, 2, 3, 4, 5)
# t2 = (6, 7, 8, 9)
# t3 = t1 + t2 
# print(t3)

# t = (1, 2, 3, 4, 5)
# print("Minimum element in the tuple",min(t))
# print("Maximum element in the tuple",max(t))

# dict = {1:'a', 2:'b', 5:'c', 4:'d'}
# print(dict)
# print(dict[5])

# cubes = {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}
# print(cubes.pop(4))
# print(cubes)
# print(cubes.popitem())
# print(cubes)
# cubes.clear()
# print(cubes)

# d = {1:'10', 2:'20', 3:'30', 4:'40', 5:'50'}
# l1 =list(d.keys())
# print("the key values are:")
# print(l1)
# l2 = list(d.values())
# print("The values are of dictionary is")
# print(l2)
# l3 = list(d.items())
# print("the list items are")
# print(l3)

# set1 = {1, 2, 3, 4, "hi", "world", "python"}
# print("python" in set1)
# set1.remove(4)
# print(set1)

# a = {1, 2, 3, 4, 5}
# b = {2, 3, 6, 7, 5}
# c = a^b 
# print(c)
# d = a - b
# print(d)
# e = b - a 
# print(e)

# def greet_users(users):             # users should be a list
#     for user in users:              # Because it's a list, we can loop through it
#         print("Hello " + user.title() + " !")       # For each user, print "hello" and then his name

# usernames = ["steve", "stan", "debbie"]
# greet_users(usernames)

# fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# map_object = map(lambda s: s.upper(), fruit)

# print(list(map_object))

# fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# filtered_object = filter(lambda s: s[0] == "A", fruit)

# print(list(filtered_object))

# from functools import reduce
# my_list = [1, 3, 5, 7]
# reduced_list = reduce(lambda first, second: first+second, my_list)
# print(reduced_list)

from functools import reduce

people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
filtered_names= filter(lambda name: len(name) <=4, people)
print(list(filtered_names))
greeting = map(lambda name: "Hello, " + name, filter(lambda name: len(name) <= 4, people))

print(list(greeting))


'hello'.