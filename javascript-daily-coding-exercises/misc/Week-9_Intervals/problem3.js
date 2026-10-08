
// You are given two lists of closed intervals. 
// Within each list, intervals are sorted and 
// non-overlapping.
// Return every intersection between the two lists. 
// A single shared endpoint counts as an intersection.

// Hint: For the current pair, 
// the overlap begins at the larger start 
// and ends at the smaller end; 
// afterward, advance the interval that ends first.

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
function intervalIntersection(firstList, secondList) {
    let res = []

    const aListLen = firstList.length
    const bListLen = secondList.length
    let aPtr = 0, bPtr = 0

    while (aPtr < aListLen && bPtr < bListLen) {
        const pairA = firstList[aPtr];
        const pairB = secondList[bPtr];

        // Find the larger start and smaller end
        const start = Math.max(pairA[0], pairB[0]);
        const end = Math.min(pairA[1], pairB[1]);

        if (start <= end) {
            res.push([start, end])
        }


        // Afterward, advance the interval that ends first.
        if (pairA[1] <= pairB[1]) aPtr++;
        if (pairB[1] <= pairA[1]) bPtr++;
    }

    return res;
}
