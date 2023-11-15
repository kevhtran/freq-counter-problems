// add whatever parameters you deem necessary
// array of int
// return length
// [5, 3, 1, 3, 7, 6, 5, 3, 1, 0]
function longestFall(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let lastLargestCount = 1
    let count = 1
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {

            count++
            console.log("count is", count, "arr[i] is", arr[i], "arr[i + 1] is ", arr[i + 1])
        }
        else {
            console.log("we are in the else");
            if (count > lastLargestCount) {
                lastLargestCount = count
            }
            count = 1
            console.log("lastLargestCount", lastLargestCount, "count", count)
        }
    }
    console.log("lastLargestCount", lastLargestCount, "count", count)

    if (count > lastLargestCount) return count;
    return lastLargestCount;

}

