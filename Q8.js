// program to check if the string is palindrome or not

const checkPalindrome = (string) => {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
};

const string = "abbbba";
const value = checkPalindrome(string);
console.log(value);
