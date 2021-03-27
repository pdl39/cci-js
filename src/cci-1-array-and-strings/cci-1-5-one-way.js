// One edit away

// ec:
// "example" vs "eample" --> true
// "hello" --> "helto" --> true
// "hihi" --> "bibi" --> false

function oneWay(str1, str2) {
  let lenDiff = Math.abs(str1.length - str2.length);
  if (lenDiff > 1) return false;

  let diffCount = 0;
  // for same str length, iterate each char one by one (no shifting needed)
  if (lenDiff === 0) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) diffCount++;
      if (diffCount > 1) return false;
    }
  }
  // for str length diff of 1, after finding one diff instance, must shift index to check the rest.
  else {
    let smallerStr =
      str1.length < str2.length ? str1 : str2;
    let biggerStr = str1.length > str2.length ? str1 : str2;
    for (
      let i = 0, p = 0;
      i < smallerStr.length;
      i++, p++
    ) {
      if (smallerStr[i] !== biggerStr[p]) {
        diffCount++;
        if (diffCount > 1) return false;
        i--;
      }
    }
  }

  return true;
}

// TEST
console.log(oneWay("example", "eample")); //true
console.log(oneWay("examfple", "eamdple")); //false
console.log(oneWay("hello", "helto")); //true
console.log(oneWay("hihi", "bibi")); //false
console.log(oneWay("sales", "sale")); //true
