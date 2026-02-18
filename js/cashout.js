document.getElementById("cashout-btn").addEventListener("click", function () {

    // 1️- get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length != 11) {
        alert("Invalid number");
        return;
    }

    // 2️- get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");

    // 3️ get Current Balance
    const currentBalance = getBalance();

    // 4️- calculate new Balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);

    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    // 5️- check pin
    const pin = getValueFromInput("cashout-pin");

    if (pin === "1234") {
        alert("Cashout successful");
        document.getElementById("balance").innerText = newBalance;
    } else {
        alert("Invalid pin");
        return;
    }
});





// document.getElementById("cashout-btn").addEventListener("click", function () {
//   //1- get the agent number & validate
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   //2- get the amount  , validate  , convert to number
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmont = cashoutAmountInput.value;
//   console.log(cashoutAmont)
//   if(cashoutNumber.length !=11){
//     alert("Invalid Agent Number");
//     return;
//   }
//   //3- get Current Balance , validate , convert to number
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);
//   //4- Calculate new Balance 
//   const newBalance = Number(balance) -Number(cashoutAmont);
  
//   if (newBalance < 0){
//     alert("Invalid Amount");
//     return;
//   }
//   console.log("new balance", newBalance);

//   //5- Get the pin and verify 
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value
//   if(pin ==='1234'){
//     //5-1 True :: show  an alert  > set Balance
//     alert("cashout successfull"); 
//     console.log("new balance", newBalance);
//     balanceElement.innerText = newBalance;
//   }else{
//     // 5-2 False :: show an error alert > return 

//     alert("invalid pin")
//     return;
//   }

    
// });