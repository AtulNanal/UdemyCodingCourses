#include <iostream>
using namespace std;

class rectangle
{
    float length;
    float breadth;

    public :

        // Mutators

        void setLength(float len);  //declaration 
        
        void setBreadth(float brdth)
        {
            breadth = 0;
            if (brdth > 0)
                breadth = brdth;            
        }

        // Accecesors

        float getLength()
        {
            return length;
        }

        float getBreadth()
        {
            return breadth;
        }

        //constructors
        
        rectangle()
        {
            length = 0;
            breadth = 0;
        }        

        rectangle(float len, float brdth);   //declaration 

        //copy constructor needs to have argument as reference and not a regular so that the parameter object is not created a copy of 
        rectangle(rectangle &r) 
        {
            length = r.length;
            breadth = r.breadth;
        }
        
        //member functions

        float area();  //declaration 

        float perimeter()
        {
            return 2.0 * (length + breadth);
        }

        //destructors
        ~rectangle()
        {

        }
};

//definition outside the class --- use scope resolution operator
rectangle::rectangle(float len, float brdth)
{
    setLength(len);
    setBreadth(brdth);
}

//definition outside the class --- use scope resolution operator
float rectangle::area()
{
    return length * breadth;
}

//definition outside the class --- use scope resolution operator
void rectangle::setLength(float length)
{
    this->length = 0;
    if (length > 0) 
        this->length = length;            
}

void main()
{
    rectangle r1;  //created on stack
    rectangle r2(10.0, 15.0); //created on stack
    r1.setLength(10);  
    r1.setBreadth(8);
    
    cout<<"Area of r1 is "<<r1.area()<<endl;
    cout<<"Perimter of r1 is "<<r1.perimeter()<<endl;

    cout<<"Area of r2 is "<<r2.area()<<endl;
    cout<<"Perimter of r2 is "<<r2.perimeter()<<endl;
    
    rectangle *p = new rectangle(20, 35);  //created on heap
    cout<<"Area of new rectangle is "<<p->area()<<endl;
    cout<<"Perimeter of rectangle is "<<p->perimeter()<<endl;
    delete p;
    p = nullptr;
}