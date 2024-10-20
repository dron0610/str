const validUsername = "dronagnihotri";
const validPassword = "92640566";

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
console.log("hello")

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        window.location.href = "./dashboard.html"; 
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "red";
    }
}
