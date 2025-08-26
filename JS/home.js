const validPin = 1234;

// Add Money Feature
//------------------ Simple Process for Add Money -------------------//
// document
//   .getElementById("btn-addMoney")
//   .addEventListener("click", function (Event) {
//     Event.preventDefault();
//     //console.log("Add Money Successfully");

//     const selectBank = document.getElementById("select-bank").value;
//     const bankAccNum = document.getElementById("input-bankAccNum").value;
//     const addAmount = parseInt(
//       document.getElementById("input-addAmount").value
//     );
//     const pinNum = parseInt(document.getElementById("input-pinNum").value);
//     const totalAmountCount = parseInt(
//       document.getElementById("totalAmount").innerText
//     );
//     //console.log(selectBank, bankAccNum, addAmount, pinNum, totalAmountCount);
//     //Validation
//     if (selectBank === " ") {
//       alert("Please Select a Bank!");
//       return;
//     }
//     if (bankAccNum.length !== 11) {
//       alert("Invalid Account Number!");
//       return;
//     }
//     if (pinNum !== validPin) {
//       alert("Invalid Pin Number!");
//       return;
//     }

//     const updateTotalAmount = totalAmountCount + addAmount;
//     document.getElementById("totalAmount").innerText = updateTotalAmount;
//   });

// -------------- Reusable Process ---------------- //

// -------------- All Function Here --------------- //

// Function For Convert Input String to Int
function convertInputValueByID(id) {
  const getID = document.getElementById(id);
  const getValue = getID.value;
  const convertedValue = parseInt(getValue);
  return convertedValue;
}

// Function For Get Input Value
function getInputValueByID(id) {
  //const getID = document.getElementById(id).value;
  const getID = document.getElementById(id);
  const getValue = getID.value;
  return getValue;
}
// ------------------------ End --------------------------- //

// ------ Add Money ------ //
document
  .getElementById("btn-addMoney")
  .addEventListener("click", function (Event) {
    Event.preventDefault();
    //console.log("Add Money Successfully");

    const selectBank = getInputValueByID("select-bank");
    const bankAccNum = getInputValueByID("input-bankAccNum");
    const addAmount = convertInputValueByID("input-addAmount");
    const pinNum = convertInputValueByID("input-pinNum-AM");
    const totalAmountCount = parseInt(
      document.getElementById("totalAmount").innerText
    );
    //console.log(selectBank, bankAccNum, addAmount, pinNum, totalAmountCount);

    //Validation
    if (
      selectBank === "" ||
      bankAccNum === "" ||
      addAmount === "" ||
      pinNum === ""
    ) {
      alert("Please filled the form!");
      return;
    }
    if (bankAccNum.length !== 11) {
      alert("Invalid Bank Account Number!");
      return;
    }
    if (addAmount <= 0) {
      alert("Please Enter a Valid Amount!");
      return;
    }
    if (pinNum !== validPin) {
      alert("Invalid Pin Number!");
      return;
    }

    const updateTotalAmount = totalAmountCount + addAmount;
    document.getElementById("totalAmount").innerText = updateTotalAmount;
    document.getElementById("form-addMoney").reset();
  });

// ------ Cash Out ------ //
document
  .getElementById("btn-withdrawMoney")
  .addEventListener("click", function (Event) {
    Event.preventDefault();
    //console.log("Withdraw Money Successfully");

    const agentNum = getInputValueByID("input-agentNum");
    const Amount = convertInputValueByID("input-Amount");
    const pinNum = convertInputValueByID("input-pinNum-CO");
    const totalAmountCount = parseInt(
      document.getElementById("totalAmount").innerText
    );
    //console.log(agentNum, Amount, pinNum, totalAmountCount);

    //Validation
    if (agentNum === "" || Amount === "" || pinNum === "") {
      alert("Please filled the form!");
      return;
    }
    if (agentNum.length !== 11) {
      alert("Invalid Agent Number!");
      return;
    }
    if (Amount <= 0) {
      alert("Please Enter a Valid Amount!");
      return;
    }
    if (pinNum !== validPin) {
      alert("Invalid Pin Number!");
      return;
    }

    const updateTotalAmount = totalAmountCount - Amount;
    document.getElementById("totalAmount").innerText = updateTotalAmount;
    document.getElementById("form-cashOut").reset();
  });

// ------ Section Button ------ //
document
  .getElementById("btn-sectionAddMoney")
  .addEventListener("click", function () {
    //console.log("Section Add Money Button Clicked");
    document.getElementById("section-addMoney").style.display = "block";
    document.getElementById("section-cashOut").style.display = "none";
  });

document
  .getElementById("btn-sectionCashOut")
  .addEventListener("click", function () {
    //console.log("Section Add Money Button Clicked");
    document.getElementById("section-addMoney").style.display = "none";
    document.getElementById("section-cashOut").style.display = "block";
  });



// ------ LogOut Feature ------ //
document
  .getElementById("btn-logOut")
  .addEventListener("click", function (Event) {
    window.location.href = "../index.html";
  });
