#include<iostream>
using namespace std;

int main()
{
    int rev = 0;
    int r;
    int m;
    int n;
    
    cout<<"Enter a number to check palindrome";
    cin>>n;

    m = n; // store number
        
    //write a loop to find reverse of a number
    //check it is a palindrome
    while(n > 0)
    {
        n /= 10;
        r = n % 10;
        rev *= 10;
        rev += r;
    }
    if (rev == m)
        cout<<"palindrome";
    else
        cout<<"not a palindrome";
}

