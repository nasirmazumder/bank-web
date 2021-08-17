document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('amount-deposited')
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;






    depositInput.value = "";




})

//handle withdraw button;
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-amount');
    const newWithdrawAmountText = withdrawInput.value;
    const newwithdrawAmount = parseFloat(newWithdrawAmountText);

    console.log(newWithdrawAmountText);


    const withdrawTotal = document.getElementById('total-withdraw');

    const previouswithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawText);


    const newWithdrawTotal = previousWithdrawTotal + newwithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    const mainBalanceAmount = document.getElementById('balance-total');
    const totalBalancetext = mainBalanceAmount.innerText;
    const totalBalance = parseFloat(totalBalancetext);
    const newBalanceAmount = totalBalance - newwithdrawAmount;

    mainBalanceAmount.innerText = newBalanceAmount;


    withdrawInput.value = "";
})