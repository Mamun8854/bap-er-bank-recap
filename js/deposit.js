document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  //   console.log(newDepositAmount);

  depositField.value = "";

  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotalAmountString = depositTotalElement.innerText;
  const depositTotalAmount = parseFloat(depositTotalAmountString);
  //   console.log(depositTotalAmount);

  const currentDepositTotal = depositTotalAmount + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const balanceTotalAmountString = balanceTotalElement.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalAmountString);

  const currentBalanceTotal = balanceTotalAmount + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
});
