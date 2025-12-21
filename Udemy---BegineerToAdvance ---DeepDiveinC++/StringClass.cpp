#include <iostream>
#include <string>
using namespace std;

int main()
{
    string s1 = "Hello";

    cout<<"Length = "<<s1.length()<<endl;
    cout<<"Size = " <<s1.size()<<endl;
    cout<<"Capacity = "<<s1.capacity()<<endl;

    s1.resize(15);
    cout<<"Capacity = "<<s1.capacity()<<endl;

    cout<<"Max Size of string = "<<s1.max_size()<<endl;

    s1.clear();
    //s1.empty();
    cout<<"S1 after clearing is "<<s1<<endl;

    s1 = "Hello";

    s1.append("World");
    cout<<"S1 aftr appending is "<<s1<<endl;

    cout<<s1<<endl;

    s1.insert(5, "Steve Jobs", 5);

    cout<<"S1 after inserting is = "<<s1<<endl;

    s1.replace(5, 5, " ");
    cout<<"s1 after replaceing is "<<s1<<endl;

    s1.push_back('z');
    cout<<"s1 after push back  is "<<s1<<endl;    

    s1.pop_back();
    cout<<"s1 after pop back is "<<s1<<endl;  
    
    s1.erase();
    cout<<"s1 after erase is " <<s1<<endl;

    s1 = "Welcome";
    char s2[10];

    s1.copy(s2, 3);
    s2[3] = '\0';

    cout<<"s2 is now = "<<s2<<endl;

    string s3;
    s3 = s1.substr(3, 3);
    cout<<"s3 is "<<s3<<endl;
    cout<<"s1 is "<<s1<<endl;  //s1 is not changed

    string s4 = "World";

    cout<<"s1 + " " + s4 is "<<s1+ " " + s4<<endl;

    string::iterator it; 
    string::reverse_iterator rt;
    
    cout<<"Iterator"<<endl;
    for (it = s1.begin(); it != s1.end(); it++)
    {
        *it =  *it-32;
        cout<<*it<<endl;
    }

    cout<<"Reverse Iterator"<<endl;
    for (rt = s1.rbegin(); rt != s1.rend(); rt++)
    {
        *rt =  *rt+32;
        cout<<*rt<<endl;
    }

}