class Student:

    school_name = 'ABC International School'

    def __init__(self, name, student_id, DoB):
        self.name = name
        self.id = student_id
        self.__DoB = DoB  # __DoB the double underscore denotes private attribute. Cannot be accessed directly

    def printInfo(self):
        print(f'Name is = {self.name} and student id = {self.id}. Belongs to school {Student.school_name}. His Date of Birth is {self.__DoB}')


st1 = Student("Atul", '101541', '22091979')
st2 = Student("Rohan", '101545', '18111983')

print(f'Type of st1 is {type(st1)}')
print(f'Type of st2 is {type(st2)}')

print(st1.name + " | " + st1.id + " | " + st1.school_name)
print(st2.name + " | " + st2.id + " | " + st2.school_name)

#Cannot access private attribute. Throws error
#print(st1.__DoB)
#Private attribute can be accessed through name mangling but this is discouraged
print(st1._Student__DoB)

st1.printInfo()
st2.printInfo()



    
