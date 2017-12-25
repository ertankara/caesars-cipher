function rot13(str) { // LBH QVQ VG!
  var encCharArray = str.split("");
  var decUnicode = encCharArray.map(function(element) {
    if (element.charCodeAt() >= "A".charCodeAt() &&
        element.charCodeAt() <= "Z".charCodeAt()) {

      if (element != " " ||
         (element.charCodeAt() < "A".charCodeAt() &&
         element.charCodeAt() > "Z".charCodeAt())) {

        if (element.charCodeAt() - 13 < "A".charCodeAt()) {
          return "Z".charCodeAt() - ( 12 - (element.charCodeAt() - "A".charCodeAt()));
        }
        else if ((element.charCodeAt() - 13) >= "A".charCodeAt()) {
          return element.charCodeAt() - 13;
        }
      }
      else {
        return " ".charCodeAt();
      }
    }
    return element.charCodeAt();
  });
  var decCharArray = decUnicode.map(function(element) {
    return String.fromCharCode(element);
  });
  return decCharArray.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
console.log(rot13("LBH QVQ VG"));