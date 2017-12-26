function decoderEncoder(str) { // LBH QVQ VG!
var encCharArray = str.toUpperCase().split("");
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
  }
  return element.charCodeAt();
});
var decCharArray = decUnicode.map(function(element) {
  return String.fromCharCode(element);
});

//return decCharArray.join("").toLowerCase();
