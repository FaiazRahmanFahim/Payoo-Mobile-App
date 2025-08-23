document
  .getElementById("btn-LogIn")
  .addEventListener("click", function (Event) {
    Event.preventDefault();
    //console.log("Log In Button is Clicked");
    //console.log(Event);
    const phnNumber = 12345678910;
    const pinNumber = 1234;

    const inputPhnNum = document.getElementById("input-mobileNum").value;
    const inputPhnNumConvert = parseInt(inputPhnNum); // cuz value come as string always
    //console.log(inputPhnNumConvert);

    const inputPinNum = document.getElementById("input-pinNum").value;
    const inputPinNumConvert = parseInt(inputPinNum); // cuz value come as string always
    //console.log(inputPinNumConvert);

    if (inputPhnNumConvert === phnNumber && inputPinNumConvert === pinNumber) {
      //console.log("Log In Successfully");
      window.location.href = "/home.html";
    } else {
      alert("Invalid Credential");
    }
  });
