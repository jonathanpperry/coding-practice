#include <algorithm>
#include <iostream>
#include <vector>
#include <string>

class TemperatureSensor
{
private:
    std::string name;
    double temperature;

public:
    TemperatureSensor(const std::string &name, double temperature)
        : name(name), temperature(temperature) {}

    const std::string &getName() const
    {
        return name;
    }

    double getTemperature() const
    {
        return temperature;
    }

    void setTemperature(double temp)
    {
        temperature = temp;
    }

    bool isOverheating(double threshold) const
    {
        return temperature > threshold;
    }
};

int main()
{

    TemperatureSensor sensor("Engine", 185.5);

    std::cout << sensor.getName() << '\n';        // Engine
    std::cout << sensor.getTemperature() << '\n'; // 185.5

    if (sensor.isOverheating(180.0))
    {
        std::cout << "Warning!\n";
    }

    sensor.setTemperature(175.0);
}