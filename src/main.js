$(document).ready(function()  {
  console.log('sanity check');

  $('form').on('submit', function(event)  {
    event.preventDefault();

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var eMail = $('#email').val();

    if (firstLetterCapital(firstName)) {
      showCallout('Capitalize the first letter');
    }

    if (firstLetterCapital(lastName)) {
      showCallout('Capitalize the first letter');
    }

    if (validateFirst(firstName)) {
      showCallout('Your name is too short!');
    }

    if (validateEmail(eMail)) {
      showCallout('Enter a valid email address');
    }
  });
});
function hideCallout()  {
  $('.valid-callout').css('visibility', 'hidden');
}

function firstLetterCapital(name) {
  return (name[0] !== name[0].toUpperCase()) ? true : false;
}

function  validateEmail(email)  {
  return (email.indexOf('@') + 1 === email.lastIndexOf('.')) || (email.indexOf('@') <= 0)  ? true : false;
}

function showCallout(msg)  {
  $('.valid-callout > h2').text(msg);
  $('.valid-callout').css('visibility', 'visible');
  setTimeout(hideCallout, 2000);
}

function validateFirst(name) {
  var minValidLetters = 3;
  return (name.length < minValidLetters) ? true : false;
}
