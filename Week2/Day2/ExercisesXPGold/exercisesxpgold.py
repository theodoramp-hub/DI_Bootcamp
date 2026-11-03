#Exercise 1 : When will I retire ?

def get_age(year, month, day):
    
    current_year = 2026
    current_month = 11
    current_day = 3
    age = current_year - year
    if month > current_month or (month == current_month and day > current_day):
        age -= 1       
    return age

def can_retire(gender, date_of_birth):
    year, month, day = map(int, date_of_birth.split("/"))
    age = get_age(year, month, day)

    if gender == "m" and age >= 67:
        return True
    elif gender == "f" and age >= 62:
        return True
    else:
        return False


date_of_birth = input("Enter your date of birth (yyyy/mm/dd): ").strip()
gender = input("Enter your gender (m/f): ").strip().lower()

if can_retire(gender, date_of_birth):
    print("You can retire.")        
else:
    print("You cannot retire yet.")