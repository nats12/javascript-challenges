/**
 * Memoized Fibonacci
 */
const memo = {};

const memoFibonacci = (n) => {
    
    if(n < 2){
        return n;
    }

    if(memo[n]) {
        return n;
    }

    const nthFib = memoFibonacci(n - 1) + memoFibonacci(n - 2);
    memo[n] = nthFib;
    return nthFib;
}


console.log(memoFibonacci(10));
