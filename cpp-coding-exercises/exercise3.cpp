#include <iostream>
#include <string>
#include <vector>

void printNames(const std::vector<std::string>& names) {
    for (const std::string& name : names) {
        std::cout << name << '\n';
    }
}

int main() {
    std::vector<std::string> names{
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve"
    };

    printNames(names);

    return 0;
}