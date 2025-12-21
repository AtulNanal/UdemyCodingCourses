#include <iostream>
using namespace std;

int main()
{
    int x = 5;
    int y = 0;
    int z = 0;

    cout<<"X before compound +=2 is "<<x<<endl;
    x += 2;
    cout<<"X aftr compound +=2 is "<<x<<endl;
    x++;
    cout<<"X after post ++ is "<<x<<endl;
    ++x;
    cout<<"X after pre ++ is "<<x<<endl;
    
    y += x;
    cout<<"Y after adding X to Y is "<<y<<" and X is "<<x<<endl;

    y = x++;
    cout<<"Y after setting x++ is "<<y<<" and X is "<<x<<endl;

    y = ++x;
    cout<<"Y after setting ++x is "<<y<<" and X is "<<x<<endl;

    z = x++ * ++y;
    cout<<"X = "<<x<<" Y = "<<y<<" Z = "<<z<<endl;

}