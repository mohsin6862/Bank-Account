document.getElementById('deposit-btn').addEventListener('click',function(){


    const depositField = document.getElementById('deposit-field');
    const depositTextString = depositField.value;
    const depositText = parseFloat(depositTextString);

    const previousDeposit = document.getElementById('previous-deposit');
    
    const previousDepositBalanceString = previousDeposit.innerText;
   
    const previousDepositBalance = parseFloat(previousDepositBalanceString);

   const previousDepositBalanceUpdated =depositText +previousDepositBalance;
   previousDeposit.innerText = previousDepositBalanceUpdated;

   const previousSavings = document.getElementById('savings');
   const previousSavingString = previousSavings.innerText;
   const previousSavingsAmmount = parseFloat(previousSavingString);
   const currentSavingAmount = depositText + previousSavingsAmmount;
   previousSavings.innerText = currentSavingAmount;
   depositField.value = '';
   
})


document.getElementById('Withdraw-btn').addEventListener('click',function(){

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawField = parseFloat(withdrawFieldString);

    const WithdrawAmount = document.getElementById('Withdraw-amount');
    const WithdrawAmountString = WithdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(WithdrawAmountString);

   const previousSavings = document.getElementById('savings');
   const previousSavingString = previousSavings.innerText;
   const previousSavingsAmmount = parseFloat(previousSavingString);
   withdrawField.value = '';

   if(newWithdrawField > previousSavingsAmmount){
    alert('Insuficient Amount');
    return;
   }

   const totalWithdraw = newWithdrawField + previousWithdrawAmount;
   WithdrawAmount.innerText =totalWithdraw;
   const currentSavingAmount =previousSavingsAmmount   -  newWithdrawField;
   previousSavings.innerText = currentSavingAmount;

  
   
})