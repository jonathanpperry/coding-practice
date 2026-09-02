#include <algorithm>
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> nums{1, 2, 3, 4, 5, 6, 7, 8};

    int threshold = 5;

    // Your code here

    auto count = std::count_if(nums.begin(), nums.end(), [threshold](int n)
                               { return n > threshold; });

    std::cout << "Count of numbers greater than " << threshold << ": " << count << std::endl;
}