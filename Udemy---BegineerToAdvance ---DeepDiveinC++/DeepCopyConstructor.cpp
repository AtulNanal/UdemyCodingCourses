#include <iostream>
using namespace std;

class myIntArray
{
    int length;
    int *ptr;

    public :

        myIntArray()
        {
            length = 1;
            ptr = new int[length];
        }

        myIntArray(int len)
        {
            length = len;
            ptr = new int[length];
        }

        //Deep copy constructor. 
        myIntArray(myIntArray &arr)
        {
            length = arr.length;
            //This will only create another pointer to same array created in arr.
            //ptr = arr.ptr; 
            ptr = new int[length]; //This creates a new array and assigns ptr to it.
        }

        int getLength()
        {
            return length;
        }

};

void main()
{
    myIntArray arr1(10); // create a dynamic array of length 10
    myIntArray arr2(arr1); // create another dynamic array of length 10

    cout<<"Lenght of arr 1 = "<<arr1.getLength()<<endl;
    cout<<"Length of arr 2 = "<<arr2.getLength()<<endl;
}






