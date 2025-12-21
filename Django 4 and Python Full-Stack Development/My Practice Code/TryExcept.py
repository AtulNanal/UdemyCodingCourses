def divide(a, b):
    c = float('nan')
    try:
        print(f'Dividing a = {a} by b = {b}')
        c = a/b
    except Exception as e:
        print(f'Exception Occured : {e}')
    finally:
        return c
    

    
output = divide(-10.3, 0)
print(output)
output = divide(-10.4, 2.65)
print(output)


    
