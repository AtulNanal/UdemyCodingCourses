#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    float a, b, c;
    float r1, r2;

    cout<<"Enter Coefficients of the binary equation a, b and c";
    cin>>a>>b>>c;

    r1 = (-b + sqrt(b*b - 4*a*c)) / (2*a);
    r2 = (-b - sqrt(b*b - 4*a*c)) / (2*a);

    cout<<"The roots of quadratic equation are"<<endl;
    cout<<r1<<endl<<r2<<endl;

    return 0;
}