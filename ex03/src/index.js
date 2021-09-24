// Only change code below this line
function rangeOfNumbers(startN, endN){
    if (startN>endN) {
        return 'The starting number will always be less than or equal to the ending number';
    } else if (startN - endN === 0) {
        return [startN];
    } else {
        const num = rangeOfNumbers(startN, endN-1);
        num.push(endN);
        return num;
    }
}
// Only change code above this line

console.log(rangeOfNumbers(5, 5));
module.exports = rangeOfNumbers;