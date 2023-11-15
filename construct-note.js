// add whatever parameters you deem necessary
// 2 strings, message and someletters
// return true if you can build the message with the letters
// assume only lowercase, no space or special characters
// message, str -> do not have to use all letters, only need to check if message has a letter that is not in the str and check if the counts between the letters does not exceed whats in the str

// compare messageCounter <= strCounter, else retrn false
// check if messageCounter has any letters thats not in strCounter
function constructNote(message, str) {
    let messageCounter = freqCounter(message);
    let strCounter = freqCounter(str);
    for (let key in messageCounter) {
        if (messageCounter[key] > strCounter[key]) return false;
        if (strCounter[key] === undefined) return false;
    }
    return true;
}

function freqCounter(str) {
    let counter = {};
    for (let char of str) {
        counter[char] = (counter[char]) + 1 || 1;
    }
    return counter;
}
