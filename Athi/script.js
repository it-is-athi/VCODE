function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleIcon = document.querySelector(".toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.textContent = "🙈";
    } else {
        passwordField.type = "password";
        toggleIcon.textContent = "👁️";
    }
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorContainer = document.getElementById("error-container");

    // Clear previous errors
    errorContainer.textContent = "";

    if (!email || !password) {
        errorContainer.textContent = "Both fields are required.";
        return;
    }

    // Simulate form submission
    console.log("Form submitted with:", email, password);
});
