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

line = MATRIX_STR.strip()split('\n')
matrix = []
for line in lines:
    if line:                      # skip empty rows (truthy check!)
        matrix.append(list(line))
print(matrix)   
for line in matrix:
    print(line)  

# Read column by column

all_chars = ""
for col in range(0, 4):          # how many columns? (length of first row)
    for row in range(len(matrix)):      # how many rows?
        all_chars += matrix[row][col]
print(all_chars)                      # check it!