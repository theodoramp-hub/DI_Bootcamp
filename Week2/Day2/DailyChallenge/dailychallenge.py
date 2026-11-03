#You are given a “Matrix” string:

#Step1: Transforming the String into a 2D List

MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''

#Step 2: Processing Columns

matrix_list = MATRIX_STR.strip().split('\n')    

message = ''      

#print (matrix_list)
#print(len(matrix_list[0]))

for col in range(len(matrix_list[0])):
    for row in matrix_list:
        if col < len(row) and row[col].isalpha():
            message += row[col]
        else:
            message += ' '
  
print(message.strip())    

