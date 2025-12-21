from abc import ABC, abstractmethod

#Abstract base class (interface!!) for printing
class Printable(ABC):

    def __init__(self, printQuality):
        self.printQuality = printQuality
        print(f'Initialized Printable with Quality {self.printQuality}')

    @abstractmethod
    def print(self, document):
        print(f'Printing Document {document}')

#Abstract base class (interface!!) for scanning
class Scannble(ABC):

    def __init__(self, scanResolution):
        self.scanResolution = scanResolution
        print(f'Initialized Scannable with Quality {self.scanResolution} DPI')

    @abstractmethod
    def scan(self, document):
        print(f'Scanning Document {document}')

#Real Base class for scannable and printable devices or other types
class Device: 

    def __init__(self, model, manufacturer):
        self.model = model
        self.manufacturer = manufacturer
        print(f'Initialized device of model {self.model} and from manufactuerer {self.manufacturer}')

    def Connect(self, port):
        print(f"Connecting to port {port}")


class SmartPrinter(Device, Printable, Scannble):

    def __init__(self, model, manufacturer, wifi_device, print_quality, scan_resolution):
        Device.__init__(self, model=model, manufacturer=manufacturer)
        Printable.__init__(self, print_quality)
        Scannble.__init__(self, scan_resolution)
        self.wifi_device = wifi_device
        print(f"WiFi Enabled: {self.wifi_device}")
        #self.Connect('1234')


    def print(self, document):
        super().print(document)

    def scan(self, document):
        super().scan(document)


# Usage
printer = SmartPrinter("Epson EcoTank L3250", "Epson", True, "High", 1200)
printer.Connect('1234')
printer.print("ProjectReport.pdf")
printer.scan("PassportScan.jpg")


