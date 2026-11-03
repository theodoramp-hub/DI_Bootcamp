print ('Welcome to Tic Tac Toe!' + '\n' )
print ('TIC TAC TOE')

def display_board(board):
    print ('  1   2   3')
    for i, row in enumerate(board):
        print(f'{i+1} ' + ' | '.join(row)) 
        if i != len(board) -1:
            print(' ---+---+--- ')


def player_input(board, player):
    while True:
        while True:
            row_text = input(f'Player {player} enter the row number (1-3): ')
            if row_text.isdigit() and 1 <= int(row_text) <= 3:
                row = int(row_text)
                break
            print(f'Player {player} the row number must be between (1-3): ')

        while True:
            column_text = input(f'Player {player} enter the column number(1-3): ')
            if column_text.isdigit() and 1 <= int(column_text) <= 3:
                column = int(column_text)
                break
            print(f'Player {player} the column number must be between (1-3): ')

        if board[row - 1][column - 1] == ' ':      
            return row - 1, column - 1             
        print('That square is taken. Try again.')  


def check_win(board, player):
    for row in board:
        if row[0] == player and row[1] == player and row[2] == player:
            return True

    for col in range(3):
        if board[0][col] == player and board[1][col] == player and board[2][col] == player:
            return True

    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True
    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True

    return False


def check_tie(board):
    for row in board:
        if ' ' in row:          
            return False       
    return True     

def play():
    board = [[' ']*3 for _ in range(3)]    
    player = 'X'     
 
    while True:
        display_board(board)
        
        r, c = player_input(board, player) 
        board[r][c] = player

        if check_win(board, player):          
            display_board(board)
            print(f'Player {player} wins!')
            break

        if check_tie(board):                               
            display_board(board)
            print("It's a tie!")
            break

        if player == 'X':                     
            player = 'O'
        else:
            player = 'X'

play()