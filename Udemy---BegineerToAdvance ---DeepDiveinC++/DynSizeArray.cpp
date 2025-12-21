#include <iostream>
using namespace std;

int main()
{
    int size;
    cout<<"Enter Size of Array"<<endl;
    cin>>size;

    int* ptr_array = new int[size];

    for (int i = 0; i < size; i++)
        ptr_array[i] = i;

    cout<<"Size of Int Array = "<<size * sizeof(int)<<endl<<"Location of Int Array = "<<ptr_array<<endl;

    delete[] ptr_array;

    cout<<"Enter New Size of Array"<<endl;
    cin>>size;    

    ptr_array = new int[size];

    for (int i = 0; i < size; i++)
        ptr_array[i] = i; 
        
    cout<<"New Size of Int Array = "<<size * sizeof(int)<<endl<<"Location of Int Array = "<<ptr_array<<endl; 
    
    for (int i = 0; i < size; i++)
        cout<<"Element at index "<<i<<" is "<<ptr_array[i]<<" "<<i[ptr_array]<<" "<<*(ptr_array+i)<<" "<<"at location "<<ptr_array+i<<endl;

    return 0;
}