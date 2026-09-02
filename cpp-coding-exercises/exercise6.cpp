#include <iostream>
#include <memory>
#include <string>

class Animal
{
protected:
    std::string name;

public:
    Animal(const std::string &name) : name(name) {}
    virtual ~Animal() = default;

    virtual void speak() const
    {
        std::cout << "Some generic animal sound\n";
    }
};

class Dog : public Animal
{
public:
    Dog(const std::string &name) : Animal(name) {}

    void speak() const override
    {
        std::cout << "Woof!\n";
    }
};

int main()
{
    // // std::make_unique creates the object on the heap
    // // and returns a std::unique_ptr<Animal> owning it.

    std::unique_ptr<Animal> animal =
        std::make_unique<Dog>("Buddy");

    std::unique_ptr<Animal> animal2 = std::move(animal);
    animal2->speak();

    return 0;
}