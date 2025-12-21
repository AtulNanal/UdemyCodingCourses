#include <iostream>
using namespace std;

int main()
{
    int A[2][3] = {{2, 4,  7}, {3, 8, 11}};

    int B[2][3];

    int C[2][3] = {2, -4};

    cout<<"Printing Array A"<<endl;
    for (auto &x:A)
    {
        for (auto &y:x)
        {
            cout<<y<<" ";
        }
        cout<<endl;
    }

    cout<<"Taking User Inputs for Array B"<<endl;
    for (auto &x:B)
    {
        for (int &y:x)
        {
            cin>>y;
        }
        cout<<endl;
    } 

    cout<<"Printing Array C"<<endl;
    for (auto &x:C)
    {
        for (int &y:x)
        {
            cout<<y<<" ";
        }
        cout<<endl;
    } 
    
    cout<<"Adding arrays A and B and storing the result in Array C"<<endl;
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            C[i][j] = A[i][j] + B[i][j];
            cout<<C[i][j]<<" ";
        }
        cout<<endl;
    }       
}