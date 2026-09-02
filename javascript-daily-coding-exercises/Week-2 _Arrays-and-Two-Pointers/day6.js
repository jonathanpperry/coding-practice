// isPalindrome("A man, a plan, a canal: Panama")
// // true

function isAlphaNumeric(char) {
  const code = char.toLowerCase().charCodeAt(0);

  return (
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57)
  );
}

function isPalindrome(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    while (i < j && !isAlphaNumeric(s[i])) {
      i++;
    }

    while (i < j && !isAlphaNumeric(s[j])) {
      j--;
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
  }
  return true;
}
