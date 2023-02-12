// step1
document.getElementById('login-btn').addEventListener('click',function(){

    const emailField = document.getElementById('email-field');
    const emailText = emailField.value;
    const passwordField = document.getElementById('password-field');
    const passwordText = passwordField.value;
    console.log(emailText,passwordText)


    if(emailText === 'mohsinctg2206@gmail.com' && passwordText === 'secret'){

        window.location.href = 'bank.html';
    }
   else{

    alert('Invalid Users')
   }
  
   emailField.value = '';
   passwordField.value = '';
   

})