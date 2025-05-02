// Developed BY Apurv Sharmma
$("#closed_eye").hide();
$("#closed_eye_con").hide();
$("#errors").text("").removeClass("error").removeClass("success");
$(document).ready(function () {
  // This is for Password eye button START-------
  $("#open_eye").click(function () {
    $("#pass").attr("type", "text");
    $("#open_eye").hide();
    $("#closed_eye").show();
  });
  $("#closed_eye").click(function () {
    $("#pass").attr("type", "password");
    $("#closed_eye").hide();
    $("#open_eye").show();
  });
  // This is for Password eye button  END-------

  // This is for Conferm Password eye button START-------

  $("#closed_eye_con").click(function () {
    $("#con_pass").attr("type", "password");
    $("#closed_eye_con").hide();
    $("#open_eye_con").show();
  });
  $("#open_eye_con").click(function () {
    $("#con_pass").attr("type", "text");
    $("#open_eye_con").hide();
    $("#closed_eye_con").show();
  });

  // This is for Conferm Password eye button END-------

  // Email Function
  function isEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Phone Number Validation Function
  function isValidPhoneNumber(number) {
    var regex = /^[0-9]{10}$/;
    return regex.test(number);
  }
  // Password Validation Function
  function isValidPassword(password) {
    var regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  var error = $("#errors");
  // This function check Name --------START HERE-------
  function checkName() {
    var name = $("#name").val().trim();
    if (name === "") {
      return "Name Not Be Empty";
    } else if (name.length < 3) {
      return "Please Enter a Valid Name (at least 3 characters";
    } else {
      return true;
    }
  }
  // This function check Name --------END HERE-------

  // This function check Email --------START HERE-------
  function checkEmail() {
    var email = $("#email").val().trim();
    if (email === "") {
      return "Email Not Be Empty";
    } else if (!isEmail(email)) {
      return "Please Enter a Valid Email";
    } else {
      error.text("");
      return true;
    }
  }
  // This function check Email --------END HERE-------

  // This function check Number --------START HERE-------
  function checkNumber() {
    var number = $("#number").val().trim();
    if (number === "") {
      return "Number Not Be Empty";
    } else if (!isValidPhoneNumber(number) && number.length < 10) {
      return "Please Enter a Valid Phone Number";
    } else {
      error.text("");
      return true;
    }
  }
  // This function check Number --------END HERE-------

  // This function check Passowrd --------START HERE-------
  function checkPassword() {
    var password = $("#pass").val().trim();
    if (password === "") {
      return "Password Not Be Empty";
    } else if (!isValidPassword(password)) {
      return "Create a strong password: 8+ chars, 1 uppercase, 1 special char, mix of letters & numbers.";
    } else {
      error.text("");
      return true;
    }
  }
  // This function check Passowrd --------END HERE-------

  //This Fuction Check Conferm Passwrd --------START HERE ---------
  function ConfermPassword() {
    var con_pass = $("#con_pass").val().trim();
    var pass = $("#pass").val().trim();
    if (con_pass === "") {
      return "Conferm Password Not Be Empty";
    } else if (con_pass !== pass) {
      return "Password Not Match";
    } else {
      error.text("");
      return true;
    }
  }
  //This Fuction Check Conferm Passwrd --------END HERE ---------

  //Button Function STARTS HERE --------------------------------

  $("#butt").click(function () {
    var isNameValid = checkName();
    var isEmailValid = checkEmail();
    var isNumberValid = checkNumber();
    var isValidPassword = checkPassword();
    var isConfermPassword = ConfermPassword();

    if (
      isNameValid === true &&
      isEmailValid === true &&
      isNumberValid === true &&
      isValidPassword === true &&
      isConfermPassword === true
    ) {
      $("#errors").html("Submit Successfully").addClass("success");
      $("#errors").css("display", "block");
    } else {
      let errorMessage = "";
      if (isNameValid !== true) {
        errorMessage += isNameValid + "<br>";
      }
      if (isEmailValid !== true) {
        errorMessage += isEmailValid + "<br>";
      }
      if (isNumberValid !== true) {
        errorMessage += isNumberValid + "<br>";
      }
      if (isValidPassword !== true) {
        errorMessage += isValidPassword + "<br>";
      }
      if (isConfermPassword !== true) {
        errorMessage += isConfermPassword + "<br>";
      }

      $("#errors").html(errorMessage).addClass("error").removeClass("success");
      $("#errors").css("display", "block");
    }
  });
  //Button Function STARTS HERE --------------------------------
});
