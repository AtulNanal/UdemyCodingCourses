#include <iostream>
using namespace std;

template<class P>
P add(P x, P y)
{
    return x+y;
}

void main()
{
    int a = 2, b = 3;
    float c = 12.3, d = 4.3;

    cout<<add(a,b)<<endl; 
    cout<<add(c,d)<<endl;

}