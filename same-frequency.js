// add whatever parameters you deem necessary
// given 2 int, check if they have same frequency
// check if str length ===, else false
// counter 1 value != counter 2 value return false
// if counter 1 has a value not in counter 2 return false


function sameFrequency(st1, st2) {

    if (st1.length != st2.length) return false

    str1Count = freqCounter(st1);
    str2Count = freqCounter(st2);

    for (let char in str1Count) {
        if (str1Count[char] !== str2Count[char]) return false
    }

    return true;

}


const freqCounter = function (str) {

    let counter = {};

    for (let char of str) {
        counter[char] = counter[char] + 1 || 1;
    }

}