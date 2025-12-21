class Book:

    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    #Dunder method / special method provided by python 
    #Assigns a string representation of the class
    #Print method will use this to print the output
    def __str__(self):
        return f'{self.title} written by {self.author}.'
    
    #Dunder method provided for integer length of object
    #MUST have an integer as return value
    def __len__(self):
        return self.pages  
    
book1 = Book(title='Python Rocks', author='Atul', pages=120)
print(book1)
print(len(book1))
    