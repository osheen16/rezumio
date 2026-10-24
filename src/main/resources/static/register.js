document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded!");

    const registerForm = document.getElementById("register-form");

    if (!registerForm) {
        console.error("Register form not found!");
        return;
    }

    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        const formData = {
            username: document.getElementById("username").value.trim(),
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value.trim(),
            phone: document.getElementById("phone").value.trim()
        };

        console.log("Sending data to backend:", formData);

        try {
            const response = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.text();
            console.log("✅ Success:", data);
            
            // ✅ Show success message
            alert("User registered successfully! Redirecting to login page...");

            // ✅ Redirect to login page
            window.location.href = "login.html"; // Ensure this path is correct

        } catch (error) {
            console.error("❌ Error:", error);
            alert("Registration failed! Check logs.");
        }
    });
});
