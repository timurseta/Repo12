// Only change code below this line
function myCounter(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = myCounter(n-1);
        arr.unshift(n);
        return arr
    }
}
// Only change code above this line

console.log(myCounter(5));
module.exports = myCounter;