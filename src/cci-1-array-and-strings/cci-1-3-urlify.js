// URLify
// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

// ec:
// "hello my friend" --> "hello%20my%20friend"

function urlify(str) {
  let rp = "%20";
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") newStr += rp;
    else newStr += str[i];
  }

  return newStr;
}

// TEST
console.log(urlify("hello my friend")); // hello%20my%20friend
console.log(urlify("  hello !")); // %20%20hello%20!
