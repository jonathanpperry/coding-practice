#include <iostream>
#include <string>
#include <vector>

class Person
{

    std::string name;
    int age;

public:
    Person(const std::string &name, int age) : name(name), age(age) {}

    std::string getName() const
    {
        return name;
    }

    int getAge() const
    {
        return age;
    }

    void haveBirthday()
    {
        age++;
        std::cout << "Happy Birthday, " << name << "! You are now " << age << " years old." << std::endl;
    }
};

int main()
{
    Person p("Alice", 30);

    std::cout << p.getName() << '\n'; // Alice
    std::cout << p.getAge() << '\n';  // 30

    p.haveBirthday();

    std::cout << p.getAge() << '\n'; // 31
}
