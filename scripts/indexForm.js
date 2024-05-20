function verifyPassword() {
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmPassword").value;
    const messagePassword = document.getElementById("passwordMessage")

    if (password == confirmpassword) {
        messagePassword.innerHTML = "";
    } else {
        messagePassword.innerHTML = "Las contraseñas no coinciden. Vuelve a intertarlo.";
    }
}