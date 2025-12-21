#include <iostream>
using namespace std;
#include <cstring>


int main()
{
    char s1[10];
    char* s2 = new char[10];
    char s3[] = "A7B3";

    cout<<"Enter a string "<<endl;
    cin.get(s1, 12);
    cin.ignore();  // Prevent newline from affecting next input  
    cout<<"Enter a another string "<<endl;
    cin.get(s2, 12);

    cout<<"Length of the first string is "<<strlen(s1)<<endl;
    cout<<"Length of the second string is "<<strlen(s2)<<endl;  

    strncat(s1, s2, 5);  //concatenate n (=5) chars from s2 to s1
    cout<<"Contatenated s2 to s1 "<<s1<<endl;

    cout<<strstr(s1, s2)<<endl; //Find s2 in s1 and return portion of s1 starting from s2

    //Compare s1 and s2, returns 0 if they are same, +ve when s1 is later in dictionary than s2 and -ve otherwise.
    //When strings are same and difference is obly one char, the ascii code difference of the matching char in s1 minus s2 is returned    
    cout<<strcmp(s1, s2)<<endl; 
    
    delete[] s2;
    s2 = new char[10] {"123.85"};    

    cout<<s3<<" is "<<strtol(s3, NULL, 16)<<endl;
    cout<<s2<<" is "<<strtof(s2, NULL)<<endl;

    char *s4 = new char[20] {"x=10;y=20;z=32"};

    char *output = strtok(s4, "=;");
    while (output != NULL)
    {
        cout<<output<<endl;
        output = strtok(NULL, "=;");  //same string as last time is to be used for the tokeniser 
    } 
    
    delete output;
    char *s5 = new char[20] {"x=10;y=20;z=32"};
    output = new char;
    output = strtok(s5, ";");
    while (output != NULL)
    {
        cout<<output<<endl;
        output = strtok(NULL, ";");  //same string as last time is to be used for the tokeniser 
    } 
    

    return 0;
}