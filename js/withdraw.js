document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  withdrawField.value = "";

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const withdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotalAmount = parseFloat(withdrawTotalString);

  const currentTotalWithdrawAmount =
    previousWithdrawTotalAmount + newWithdrawAmount;

  withdrawTotalElement.innerText = currentTotalWithdrawAmount;

  const balanceTotalField = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalField.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const currentBalanceTotalAmount = previousBalanceTotal - newWithdrawAmount;
  balanceTotalField.innerText = currentBalanceTotalAmount;
});
