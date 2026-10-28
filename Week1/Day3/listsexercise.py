#Exercise 1:Lists

list1 = [5, 10, 15, 20, 25, 50, 20]
if 20 in list1:
    position = list1.index(20)
    list1[position] = 200
list1[3] = 200
print(list1)


#Exercise 2:Tuples

a_tuple = (10, 20, 30, 40)
a,b,c,d = a_tuple
print(a)
print(b)
print(c)
print(d)

