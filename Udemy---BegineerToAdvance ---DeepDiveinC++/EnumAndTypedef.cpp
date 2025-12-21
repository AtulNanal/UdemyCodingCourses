#include <iostream>
using namespace std;

typedef int rollNo;
typedef int marks;

enum departments {  math, 
                    phy,
                    cse,
                    ece,
                    ee
                };

int main()
{
    rollNo r1, r2, r3;
    marks m1, m2, m3;
    
    departments d1, d2, d3;

    r1 = 1234;
    r2 = 1235;
    r3 = 1236;

    m1 = 100;
    m2 = 120;
    m3 = 160;

    d1 = math;
    d2 = ece;
    d3 = phy;

    cout<<r1<<" "<<r2<<" " <<r3<<endl;
    cout<<m1<<" "<<m2<<" "<<m3<<endl;
    cout<<d1<<" "<<d2<<" "<<d3<<endl;
    
}