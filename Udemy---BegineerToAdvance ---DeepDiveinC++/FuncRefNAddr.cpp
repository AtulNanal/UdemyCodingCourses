#include <iostream>
using namespace std;

//call by address
void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

//call by reference
void swap(int &a, int &b)
{
    int temp = a;
    a = b;
    b = temp;
}

//return by address
int* createIntArray(int size)
{
    int* ptr = new int[size];
    for (int i = 0; i < size; i++)
    {
        ptr[i] = i*2;
    }
    cout<<"Address of array created of size "<<size<<" is "<<ptr<<endl;
    return ptr;
}

//return by reference
int & fun(int &a)
{
    return a;
}

void main()
{
    int x = 10, y = 20, z = 30;
    swap(&x, &y);
    cout<<"x = "<<x<<" y = "<<y<<endl;
    swap(x, y);
    cout<<"x = "<<x<<" y = "<<y<<endl;
    
    int* intCollection = createIntArray(10);
    cout<<"Address of array intCollection is "<<intCollection<<endl;
    for (int i = 0; i < 10; i++)
    {
        cout<<intCollection[i]<<" ";
    }
    cout<<endl;

    delete[] intCollection;
    intCollection = nullptr;

    cout<<"z = "<<z<<endl;
    fun(z) = 40;  //since the function is returning by reference the same param that is passed, it can be used on LHS of expression
    cout<<"z = "<<z<<endl;

}