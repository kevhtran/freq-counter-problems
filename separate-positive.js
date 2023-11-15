// add whatever parameters you deem necessary
// [2, -1, -3, 6, -8, 10]
// sort
// divide and conquer
// if positive, leave
function separatePositive(arr) {

    let start = 0
    let end = arr.length - 1

    while (start < end) {

        if (arr[start] < 0 && arr[end] > 0) {
            let temp = arr[start];

            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }

        else {
            if (arr[start] > 0) {
                start++;
            }
            else {
                end--;
            }
        }

    }

}
