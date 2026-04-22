
function toggleNav() {
  var nav = document.getElementById('navLinks');
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
  } else {
    nav.classList.add('open');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('#navLinks a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      document.getElementById('navLinks').classList.remove('open');
    });
  }
});

// function to show tabs in courses section
function showTab(tabName) {
  // hide all tabs first
  document.getElementById('tab-postgrad').style.display = 'none';
  document.getElementById('tab-undergrad').style.display = 'none';
  document.getElementById('tab-exec').style.display = 'none';

  // reset all button colors
  document.getElementById('btn-postgrad').style.background = 'lightgray';
  document.getElementById('btn-postgrad').style.color = 'black';
  document.getElementById('btn-undergrad').style.background = 'lightgray';
  document.getElementById('btn-undergrad').style.color = 'black';
  document.getElementById('btn-exec').style.background = 'lightgray';
  document.getElementById('btn-exec').style.color = 'black';

  // show selected tab
  document.getElementById('tab-' + tabName).style.display = 'block';

  // make selected button active
  document.getElementById('btn-' + tabName).style.background = 'navy';
  document.getElementById('btn-' + tabName).style.color = 'white';
}

// form submit function
function submitForm(event) {
  event.preventDefault();

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('emailAddr').value;
  var phone = document.getElementById('phoneNum').value;
  var program = document.getElementById('program').value;
  var city = document.getElementById('city').value;
  var consent = document.getElementById('consent').checked;

  // check if all fields are filled
  if (firstName == '') {
    alert('Please enter your first name');
    return;
  }

  if (lastName == '') {
    alert('Please enter your last name');
    return;
  }

  if (email == '') {
    alert('Please enter your email');
    return;
  }

  if (phone == '') {
    alert('Please enter your phone number');
    return;
  }

  if (phone.length != 10) {
    alert('Phone number should be 10 digits');
    return;
  }

  if (program == '') {
    alert('Please select a program');
    return;
  }

  if (city == '') {
    alert('Please enter your city');
    return;
  }

  if (consent == false) {
    alert('Please check the consent box');
    return;
  }

  // if everything is ok show success message
  document.getElementById('enquiryForm').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';

  alert('Thank you! We will call you back within 30 minutes :)');
}

window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById('scrollTopBtn') && (document.getElementById('scrollTopBtn').style.display = 'block');
  } else {
    document.getElementById('scrollTopBtn') && (document.getElementById('scrollTopBtn').style.display = 'none');
  }
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
