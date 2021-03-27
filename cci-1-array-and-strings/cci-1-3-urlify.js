// URLify

// ec:
// "hello my friend" --> "hello%20my%20friend"

function urlify(str) {
  rp = "%20";
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
