$(document).ready(function() {

    /* FUNCTION DEFINITION BEGIN */
  function decoderEncoder(str) { // LBH QVQ VG!
  let encCharArray = str.toUpperCase().split("");
  let decUnicode = encCharArray.map(function(element) {
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
  let decCharArray = decUnicode.map(function(element) {
    return String.fromCharCode(element);
  });

  return decCharArray.join("").toLowerCase();
  }

    /* FUNCTION DEFINITION END */



    /* FUNCTION DEFINITION BEGIN */
    // if the buttons clicked many times clear text
    let buttonClickCounter = 0;
    function clearDivWhenClickedTooMuch(counterValue, $selector) {
      // Counter maximum limit is 5
      if (counterValue > 3) {
        // Clear the content of the div
        $selector.empty();
        // Reset the counter after emptying
        buttonClickCounter = 0;
      }
    }

    /* FUNCTION DEFINITION END */


  let $body = $('#body-id');
  let $container = $('#container-id');
  let $heading = $('#heading-id');
  let $inputField = $('#input-id');
  let $encodeButton = $('#encode');
  let $decodeButton = $('#decode');
  let $outputField = $('#output-id');

  // Hold the elements indicated by ids to add and remove class
  const idArray = [
    $body, $container,
    $heading, $inputField,
    $outputField
  ];

  // Classes to add to make it easier to add with for loop
  const classArray = [
    'dark-body', 'dark-container',
    'dark-heading', 'dark-input',
    'dark-output'
  ];



  // If ENCODE button is clicked
  $($encodeButton).on('click', function() {
    // Once encode is clicked bring the dark theme
    // First parameter counter, second is the output filed
    clearDivWhenClickedTooMuch(buttonClickCounter, $outputField);
    // If the given string is empty
    if (!(($('#input-id').val().length) !== 0)) {
        alert("Please provide proper info!");
    } else {
      ++buttonClickCounter;
      for (let i = 0; i < idArray.length; i++) {
        idArray[i].addClass(classArray[i]);
      }

      // Encode the message and log it to the output
      $message = decoderEncoder($inputField.val());
      $outputField
        .append(("<p>" + $message + "</p>"));
    }
  });

  // If DECODE is clicked
  $($decodeButton).on('click', function() {
    // Once decode is clicked ( green button ) remove dark theme
    // First parameter counter, second is the output filed
    clearDivWhenClickedTooMuch(buttonClickCounter, $outputField);

    // If the given string is empty
    if (!(($('#input-id').val().length) !== 0)) {
        alert("Please provide proper info!");
    } else {
      ++buttonClickCounter;
      for (let i = 0; i < idArray.length; i++) {
        idArray[i].removeClass(classArray[i]);
      }
      // Decode the message and append it to the output
      $message = decoderEncoder($inputField.val());
      $outputField
        .append(("<p>" + $message + "</p>"));
    }
  });


 });
