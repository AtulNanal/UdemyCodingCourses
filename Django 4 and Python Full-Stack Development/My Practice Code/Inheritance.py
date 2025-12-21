from datetime import datetime

class Student:

    school_name = 'ABC International School'

    def __init__(self, name, student_id, DoB):
        self.name = name
        self.id = student_id
        self._DoB = DoB  # __DoB the single underscore denotes protected attribute. Cannot be accessed directly

    def printInfo(self):
        print(f'Name is = {self.name} and student id = {self.id}. Belongs to school {Student.school_name}. His Date of Birth is {self._DoB}')

    def getAge(self):
        dob = datetime.strptime(self._DoB, "%d%m%Y")
        today = datetime.today()

        age = today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))

        return age


class PrimaryStudent(Student):

    def __init__(self, name, student_id, DoB, classTeacher):
        super().__init__(name=name, student_id=student_id, DoB=DoB)
        self.classTeacher = classTeacher

    def printInfo(self):
        super().printInfo()
        print(f"Class Teacher is : {self.classTeacher}")

    def printDoB(self):
        print(f"{self.name} DoB is {self._DoB}")    # accessing base class variable in derived class


st1 = Student("Ram", "102657", '12061988')

st2 = PrimaryStudent("Vipin", '101956', '08091986', 'Tim Jones')


st1.printInfo()
print(f"{st1.name} age is {st1.getAge()}")  
print(st1._DoB)  # This works but is discouraged
st2.printInfo()  # accessing overloaded base class method from derived class object
print(f"{st2.name} age is {st2.getAge()}")  # accessing base class method through derived class 
st2.printDoB()  # accessing base class attribute through derived class object

