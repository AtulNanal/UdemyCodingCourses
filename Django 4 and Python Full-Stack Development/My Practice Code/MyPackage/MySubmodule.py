class Report:
    
    def __init__(self, message):
        self.message = message

    def report(self):
        print(f'Reporting message from Class {self.message}')

def ReportMessage(message):
    print(f'Reporting message from Function {message}')
