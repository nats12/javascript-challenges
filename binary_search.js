
const binarySearch = (input, n) => {

    let lowerBound = 0;
    let upperBound = input.length - 1;

    while (lowerBound <= upperBound) {
        const midPointIndex = Math.floor((lowerBound + upperBound) / 2);
        const midPointItem = input[midPointIndex];

        if (n === midPointItem) {
            return midPointIndex;
        }

        if (midPointItem < n) {
            lowerBound = midPointIndex + 1;
        } else if (midPointItem > n) {
            upperBound = midPointIndex - 1;
        }
    }

    return -1;
}


const input = [
    1, 2, 5, 6, 7, 34, 56, 73, 89, 100, 230
];

console.log(binarySearch(input, 56));