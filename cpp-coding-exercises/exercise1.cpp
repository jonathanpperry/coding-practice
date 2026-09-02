std::vector<int> getEvenSquares(const std::vector<int>& nums) {
    std::vector<int> evenSquares;
    for (int num : nums) {
        if (num % 2 == 0) {
            evenSquares.push_back(num * num);
        }
    }
    return evenSquares;
}

