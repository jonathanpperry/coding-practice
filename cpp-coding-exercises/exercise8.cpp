#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    std::vector<int> nums{1, 2, 3, 4, 5, 6, 7, 8};

    int count = std::count_if(
        nums.begin(),
        nums.end(),
        [](int n)
        { return n > 4; });

    std::cout << "Count of numbers greater than 4: "
              << count << std::endl;
}