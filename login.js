document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const studentId = document.getElementById('student-id').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (studentId === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        errorMessage.style.display = "block";
    } else {
        // Temporarily allowing access if fields are filled
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "index.html"; // Redirect to the main page
    }
});
