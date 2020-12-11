///
/// Given a string str, return true or false depending on whether it is a palindrome
///

const isAPalindrome = (str) => {

    
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}


console.log("Level -", isAPalindrome("level"));
console.log("Car -", isAPalindrome("car"));