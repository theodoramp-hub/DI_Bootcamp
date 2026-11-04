# #Challenge 1: Sorting

# Step 1: Get Input
words = input ('Write a string with words serated by ,: ')

# Step 2: Split the String
words_splitted = words.split(',')

# Step 3: Sort the List
words_splitted.sort()

# Step 4: Join the Sorted List
words_joined = ','.join(words_splitted)

# Step 5: Print the Result
print(words_joined)




# Challenge 2: Longest Word

#Step 1: Define the Function
def longest_word(sentence):

#Step 2: Split the Sentence into Words   
    split_the_sentense = sentence.split()

#Step 3: Initialize Variables
    longest = ''

# Step 4: Iterate Through the Words
    for word in split_the_sentense:

# Step 5: Compare Word Lengths
        if len(word) > len(longest):
            longest = word

# Step 6: Return the Longest Word            
    return longest
            
print(longest_word("cat dog"))
    

       



   

