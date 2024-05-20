function verifyPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messagePassword = document.getElementById("passwordMessage");

    if (password !== confirmPassword) {
        messagePassword.innerHTML = "Las contraseñas no coinciden. Vuelve a intentarlo.";
        return false; 
    }

    if (password.length < 8) {
        messagePassword.innerHTML = "La contraseña debe tener al menos 8 caracteres.";
        return false; 
    }

    messagePassword.innerHTML = "";
    return true; 
}