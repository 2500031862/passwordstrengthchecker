
function checkPassword() {

    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (password.length === 0) {
        result.innerHTML = "Please enter a password";
    }
    else if (score <= 2) {
        result.innerHTML = "Weak Password ❌";
    }
    else if (score <= 4) {
        result.innerHTML = "Medium Password ⚠️";
    }
    else {
        result.innerHTML = "Strong Password ✅";
    }
}


