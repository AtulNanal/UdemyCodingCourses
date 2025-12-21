#include <iostream>
using namespace std;

int main()
{
    int n, sum;
    cout<<"Enter the number upto which you want sum 1, 2 ........n'";
    cin>>n;
    
    sum = n*(n+1) / 2;

    cout<<"The sum of numbers is "<<sum;

    return 0;
}