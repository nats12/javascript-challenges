const digitSum = (digit) => {

    if(digit === 0) {
        return 0;
    }
    
    const firstPlace = digit % 10;
    const trimmedItems = Math.floor(digit / 10);
    const remainingItems = twoSum(trimmedItems);

    return remainingItems + firstPlace;
}

console.log(twoSum(2323));