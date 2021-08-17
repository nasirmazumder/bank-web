document.getElementById('login-submit').addEventListener('click', function (e) {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    //get password;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    if (userEmail == 'nasirkhan3438@gmail.com' && userPassword == '38922618') {
        window.location.href = 'banking.html'
    }
    else {
        alert('Mair Na Khaite  Thik kore ID r Password bosha');
    }


    e.preventDefault();
})

