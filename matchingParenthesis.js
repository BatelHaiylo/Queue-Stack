function isValidVerse(arg) {
    const charArray = [...arg].reverse();
    const checkArr = [];
    let result = true;
    charArray.forEach((char) => {
      if (char === "}" || char === "]" || char === ")") {
        checkArr.push(char);
      } else {
        if (checkArr.length === 0) {
          result = false;
        }
        if (char !== checkMatchingParenthesic(checkArr.pop())) {
          result = false;
        }
      }
    });
    if (checkArr.length !== 0) result = false;
    return result;
  }
  function checkMatchingParenthesic(char) {
    switch (char) {
      case "]":
        return "[";
      case ")":
        return "(";
      case "}":
        return "{";
    }
  }