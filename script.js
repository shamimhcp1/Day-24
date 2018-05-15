
// Check Error ///


function checkFirstName() {
    var firstName = $('#firstName').val();
    var reg = /^[a-zA-Z -]{2,10}$/;
    if(reg.test(firstName)){
        $('#firstNameError').text(' ')
        return true;
    } else {
        $('#firstNameError').text('First Name Should be 2 to 10 Characters')
        return false;
    }
};

function checkLastName() {
    var lastName = $('#lastName').val();
    var reg = /^[a-zA-Z -]{2,10}$/;
    if(reg.test(lastName)){
        $('#lastNameError').text(' ')
        return true;
    } else {
        $('#lastNameError').text('Last Name Should be 2 to 10 Characters')
        return false;
    }
};

function checkEmailAddress() {
    var emailAddress = $('#emailAddress').val();
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(reg.test(emailAddress)){
        $('#emailAddressError').text(' ')
        return true;
    } else {
        $('#emailAddressError').text('Email Address is invalid')
        return false;
    }
};

function checkPassword() {
    var password = $('#password').val();
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(reg.test(password)){
        $('#passwordError').text(' ')
        return true;
    } else {
        $('#passwordError').text('* You must enter a password')
        return false;
    }
};
function checkConfirmPassword() {
    var confirmPassword = $('#confirmPassword').val();
    var password = $('#password').val();
    if(password == confirmPassword){
        $('#confirmPasswordError').text(' ')
        return true;
    } else {
        $('#confirmPasswordError').text('* password & confirm password should be same')
        return false;
    }
};

$('#showHidePassword').click(function () {
    var attrValue = $('#password').attr('type');
    if(attrValue == 'password') {
        $('#password').attr('type', 'text');
    } else {
        $('#password').attr('type', 'password');
    }
});
$('#showHideConfirmPassword').click(function () {
    var attrValue = $('#confirmPassword').attr('type');
    if(attrValue == 'password') {
        $('#confirmPassword').attr('type', 'text');
    } else {
        $('#confirmPassword').attr('type', 'password');
    }
});

function checkGenderInfo() {
    var genderInfo = $('input[type="radio"]:checked').val();
    if(genderInfo == 'male' || genderInfo == 'female') {
        $('#genderError').text('');
        return true;
    } else {
        $('#genderError').text('Please give your gender info');
        return false;
    }
};

function checkDistrictName() {
    var districtValue = $('#district').val();
    if(districtValue == ' ') {
        $('#districtError').text('Please select your District Name');
        return false;
    } else {
        $('#districtError').text(' ');
        return true;
    }
};

$('#form').submit(function () {

    if(checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true && checkPassword() == true && checkConfirmPassword() == true && checkGenderInfo() == true && checkDistrictName() == true) {
        return true;
    } else {
        return false;
    }
});

$('#firstName').keyup(function () {
    checkFirstName();
});

$('#lastName').keyup(function () {
    checkLastName();
});

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});
$('#password').blur(function () {
    checkPassword();
});

$('#password').keyup(function () {
    checkPassword();
});
$('#password').click(function () {
    $('#passwordError').text('Password must contain 8 characters, small letter, capital letter, symble and number.');
});


$('#confirmPassword').blur(function () {
    checkConfirmPassword();
});

$('#confirmPassword').keyup(function () {
   $('#confirmPasswordError').text(' ');
});

$('#confirmPassword').click(function () {
    $('#confirmPasswordError').text('Password should be same');
});





// Fixed Menu////////////////////////////////

$(window).scroll(function () {
    var menuPosition = $("#menu").position();
    var windowScrollPosition = $(window).scrollTop();
    if(windowScrollPosition >= menuPosition.top) {
        $('#menuUl').css ({
            'position': 'fixed',
            'top': '0px',
            'width': '80%'
        });
    } else {
        $('#menuUl').css ({
            'position': 'relative',
            'top': '0px',
            'width': '100%'
        })
    }
});
