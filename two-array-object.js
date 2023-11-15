// add whatever parameters you deem necessary
// 2 arrays 
// [key], [values]
// reduce 
// start off initial with an {}
// while our idx < key.length: add to {val: value[idx]} 
function twoArrayObject(key, value) {

    let obj = {}

    for (let i = 0; i < key.length; i++) {
        if (value[i] === undefined) {
            obj[key[i]] = null;
        } else {
            obj[key[i]] = value[i]
        }
    }

    return obj
}
// 