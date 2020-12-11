///
/// Find the nth Fibonacci number
///

const fibonacci = (n) => {
 
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

