function validatePasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match! Please try again.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}

function closeAlert(button) {
    const alert = button.parentElement;
    alert.style.display = "none";
}
