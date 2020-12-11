///
/// Sum all the digits in a given number
/// CONSTRAINT: You can't convert the number into a string 😉
///


const digitSum = (digit) => {

    if(digit === 0) {
        return 0;
    }
    
    const firstPlace = digit % 10;
    const trimmedItems = Math.floor(digit / 10);
    const remainingItems = digitSum(trimmedItems);

    return remainingItems + firstPlace;
}

console.log(digitSum(2323));