const validPin = 1234;
const transactionsData = [];

/*
//------------------ Simple Process for Add Money -------------------//
document
  .getElementById("btn-addMoney")
  .addEventListener("click", function (Event) {
    Event.preventDefault();
    //console.log("Add Money Successfully");

    const selectBank = document.getElementById("select-bank").value;
    const bankAccNum = document.getElementById("input-bankAccNum").value;
    const addAmount = parseInt(
      document.getElementById("input-addAmount").value
    );
    const pinNum = parseInt(document.getElementById("input-pinNum").value);
    const totalAmountCount = parseInt(
      document.getElementById("totalAmount").innerText
    );
    //console.log(selectBank, bankAccNum, addAmount, pinNum, totalAmountCount);
    //Validation
    if (selectBank === " ") {
      alert("Please Select a Bank!");
      return;
    }
    if (bankAccNum.length !== 11) {
      alert("Invalid Account Number!");
      return;
    }
    if (pinNum !== validPin) {
      alert("Invalid Pin Number!");
      return;
    }

    const updateTotalAmount = totalAmountCount + addAmount;
    document.getElementById("totalAmount").innerText = updateTotalAmount;
  });
*/
// -------------- Reusable Process ---------------- //

// -------------- All Function Here --------------- //
// Function For Convert Input String to Integer
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

// Function Handle Toggle Button
function handleToggleBtn(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    //console.log(form);
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// Function Handle Toggle Active Button Color
function handleToggleActionBtn(id) {
  const activeBtns = document.getElementsByClassName("activeBtn");
  for (const btn of activeBtns) {
    btn.classList.remove("border-blue-400", "bg-sky-100", "text-sky-600");
    btn.classList.add("border-gray-300", "bg-white", "text-black");
  }

  document
    .getElementById(id)
    .classList.remove("border-gray-300", "bg-white", "text-black");
  document
    .getElementById(id)
    .classList.add("border-blue-400", "bg-sky-100", "text-sky-600");
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
    if (isNaN(addAmount) || addAmount <= 0) {
      alert("Please Enter a Valid Amount!");
      return;
    }
    if (pinNum !== validPin) {
      alert("Invalid Pin Number!");
      return;
    }

    const updateTotalAmount = totalAmountCount + addAmount;
    document.getElementById("totalAmount").innerText = updateTotalAmount;

    const data = {
      image: "./Resources/assets/wallet1.png",
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);
    //console.log(transactionsData);

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
    if (isNaN(Amount) || Amount <= 0) {
      alert("Please Enter a Valid Amount!");
      return;
    }
    if (pinNum !== validPin) {
      alert("Invalid Pin Number!");
      return;
    }

    const updateTotalAmount = totalAmountCount - Amount;
    document.getElementById("totalAmount").innerText = updateTotalAmount;

    const data = {
      image: "./Resources/assets/send1.png",
      name: "Withdraw Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);

    document.getElementById("form-cashOut").reset();
  });

// ------ Transfer Money ------ //
document
  .getElementById("btn-sendMoney")
  .addEventListener("click", function (Event) {
    Event.preventDefault();
    //console.log("Send Money Successfully");

    const userAccNum = getInputValueByID("input-userAccNum");
    const transferAmount = convertInputValueByID("input-transferAmount");
    const pinNum = convertInputValueByID("input-pinNum-UAN");
    const totalAmountCount = parseInt(
      document.getElementById("totalAmount").innerText
    );
    console.log(userAccNum, transferAmount, pinNum, totalAmountCount);

    //Validation
    if (userAccNum === "" || transferAmount === "" || pinNum === "") {
      alert("Please filled the form!");
      return;
    }
    if (userAccNum.length !== 11) {
      alert("Invalid Agent Number!");
      return;
    }
    if (isNaN(transferAmount) || transferAmount <= 0) {
      alert("Please Enter a Valid Amount!");
      return;
    }
    if (pinNum !== validPin) {
      alert("Invalid Pin Number!");
      return;
    }

    const updateTotalAmount = totalAmountCount - transferAmount;
    document.getElementById("totalAmount").innerText = updateTotalAmount;

    const data = {
      image: "./Resources/assets/money1.png",
      name: "Transfer Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);

    document.getElementById("form-transferMoney").reset();
  });

// ------ Get Bonus ------ //
document
  .getElementById("btn-getBonus")
  .addEventListener("click", function (Event) {
    Event.preventDefault();
    //console.log("Added Bonus Money Successfully");

    const coupon = convertInputValueByID("input-coupon");
    //Validation
    if (isNaN(coupon) || coupon <= 0) {
      alert("Please Enter a Valid Amount!");
      return;
    }
    const totalAmountCount = parseInt(
      document.getElementById("totalAmount").innerText
    );
    //console.log(couponAmount, totalAmountCount);

    const updateTotalAmount = totalAmountCount + coupon;
    document.getElementById("totalAmount").innerText = updateTotalAmount;

    const data = {
      image: "./Resources/assets/bonus1.png",
      name: "Get Bonus",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);

    document.getElementById("form-getBonus").reset();
  });

// ------ Pay Bill ------ //
document
  .getElementById("btn-payNow")
  .addEventListener("click", function (Event) {
    Event.preventDefault();
    //console.log("Pay Bill Successfully");

    const selectToPay = getInputValueByID("select-toPay");
    const billerAccNum = getInputValueByID("input-billerAccNum");
    const AmountToPay = convertInputValueByID("input-AmountToPay");
    const pinNum = convertInputValueByID("input-pinNum-PB");
    const totalAmountCount = parseInt(
      document.getElementById("totalAmount").innerText
    );
    //console.log(selectToPay, billerAccNum, AmountToPay, pinNum, totalAmountCount);

    //Validation
    if (
      selectToPay === "" ||
      billerAccNum === "" ||
      AmountToPay === "" ||
      pinNum === ""
    ) {
      alert("Please filled the form!");
      return;
    }
    if (billerAccNum.length !== 11) {
      alert("Invalid Biller Account Number!");
      return;
    }
    if (isNaN(AmountToPay) || AmountToPay <= 0) {
      alert("Please Enter a Valid Amount!");
      return;
    }
    if (pinNum !== validPin) {
      alert("Invalid Pin Number!");
      return;
    }

    const updateTotalAmount = totalAmountCount - AmountToPay;
    document.getElementById("totalAmount").innerText = updateTotalAmount;

    const data = {
      image: "./Resources/assets/purse1.png",
      name: "Pay Bill",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);

    document.getElementById("form-payBill").reset();
  });

// ------ Transactions ------ //
document
  .getElementById("btn-sectionTransactions")
  .addEventListener("click", function () {
    //console.log("Transactions Button Click Successfully");
    const transactionHistoryForm = document.getElementById(
      "form-transactionHistory"
    );
    transactionHistoryForm.innerHTML = "";

    //console.log(transactionHistoryForm);
    for (data of transactionsData) {
      const div = document.createElement("div");
      div.innerHTML = `
           <div
          class="bg-white w-96 p-4 rounded-2xl flex justify-between items-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div class="flex gap-3">
            <div class="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200">
              <img
                src="${data.image}"
                class="w-6 h-6"
              />
            </div>
            <div>
              <h2 class="font-semibold text-gray-800">${data.name}</h2>
              <h3 class="text-xs font-medium text-gray-500">${data.date}</h3>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical text-gray-400 hover:text-gray-600 cursor-pointer"></i>
        </div>     
      `;
      transactionHistoryForm.appendChild(div);
    }
  });

// ------ Section Button Toggle Feature ------ //
/*
document
  .getElementById("btn-sectionAddMoney")
  .addEventListener("click", function () {
    //console.log("Section Add Money Button Clicked");

    document.getElementById("section-addMoney").style.display = "block";
    document.getElementById("section-cashOut").style.display = "none";
    document.getElementById("section-transferMoney").style.display = "none";
    document.getElementById("section-getBonus").style.display = "none";
    document.getElementById("section-payBill").style.display = "none";
    document.getElementById("section-transactions").style.display = "none";
  });
  */
document
  .getElementById("btn-sectionAddMoney")
  .addEventListener("click", function () {
    //console.log("Section Add Money Button Clicked");
    handleToggleBtn("section-addMoney");

    // Active Button
    handleToggleActionBtn("btn-sectionAddMoney");
  });

document
  .getElementById("btn-sectionCashOut")
  .addEventListener("click", function () {
    //console.log("Section Cash Out Button Clicked");
    handleToggleBtn("section-cashOut");

    // Active Button
    handleToggleActionBtn("btn-sectionCashOut");
  });

document
  .getElementById("btn-sectionTransferMoney")
  .addEventListener("click", function () {
    //console.log("Section Transfer Money Button Clicked");
    handleToggleBtn("section-transferMoney");

    // Active Button
    handleToggleActionBtn("btn-sectionTransferMoney");
  });

document
  .getElementById("btn-sectionGetBonus")
  .addEventListener("click", function () {
    //console.log("Section Get Bonus Button Clicked");
    handleToggleBtn("section-getBonus");

    // Active Button
    handleToggleActionBtn("btn-sectionGetBonus");
  });

document
  .getElementById("btn-sectionPayBill")
  .addEventListener("click", function () {
    //console.log("Section Pay Bill Button Clicked");
    handleToggleBtn("section-payBill");

    // Active Button
    handleToggleActionBtn("btn-sectionPayBill");
  });

document
  .getElementById("btn-sectionTransactions")
  .addEventListener("click", function () {
    //console.log("Section Transactions Button Clicked");
    handleToggleBtn("section-transactions");

    // Active Button
    handleToggleActionBtn("btn-sectionTransactions");
  });

// ------ LogOut Feature ------ //
document
  .getElementById("btn-logOut")
  .addEventListener("click", function (Event) {
    window.location.href = "../index.html";
  });
