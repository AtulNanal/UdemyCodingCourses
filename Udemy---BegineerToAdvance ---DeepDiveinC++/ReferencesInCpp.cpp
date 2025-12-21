#include <iostream>
using namespace std;

int main()
{
    int x = 10;
    int &y = x;

    int a = x;
    
    cout<<"x = "<<x<<" y = "<<y<<" a = "<<a<<endl;
    cout<<"Address x = "<<&x<<" Address y = "<<&y<<" Address a = "<<&a<<endl;

    x = 20;

    cout<<"x = "<<x<<" y = "<<y<<" a = "<<a<<endl;
    cout<<"Address x = "<<&x<<" Address y = "<<&y<<" Address a = "<<&a<<endl;    

    y += 10;

    cout<<"x = "<<x<<" y = "<<y<<" a = "<<a<<endl;
    cout<<"Address x = "<<&x<<" Address y = "<<&y<<" Address a = "<<&a<<endl;      
    
    return 0;

}