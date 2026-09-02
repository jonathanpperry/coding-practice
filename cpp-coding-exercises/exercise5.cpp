#include <iostream>
#include <string>
#include <vector>

class Animal
{

    std::string name;

public:
    Animal(const std::string &name) : name(name) {}

    virtual ~Animal() = default;

    std::string getName() const
    {
        return name;
    }

    virtual void speak() const
    {
        std::cout << "Some generic animal sound" << std::endl;
    }
};

class Dog : public Animal
{
public:
    Dog(const std::string &name) : Animal(name) {}

    void speak() const override
    {
        std::cout << "Woof!" << std::endl;
    }
};

class Cat : public Animal
{
public:
    Cat(const std::string &name) : Animal(name) {}

    void speak() const override
    {
        std::cout << "Meow!" << std::endl;
    }
};

int main()
{
    Dog dog("Buddy");
    Cat cat("Whiskers");
    std::vector<Animal *> animals = {&dog, &cat};

    for (const Animal *animal : animals)
    {
        animal->speak();
    }
}
