// add whatever parameters you deem necessary

function countPairs(arr, target) {
    // sort the arr
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;
    let count = 0;

    while (arr[start] < arr[end]) {
        if (arr[start] + arr[end] === target) {
            count++;
            start++;
            end--;
        }
        else if (arr[start] + arr[end] < target) {
            start++
        }
        else { end-- }
    }
    return count;
}
