
document.addEventListener("DOMContentLoaded", () => {
    const backendBaseUrl = "http://localhost:8080";

    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const googleButton = document.getElementById("google-login");
    const linkedinButton = document.getElementById("linkedin-login");

    googleButton.addEventListener("click", () => {
        window.location.href =
            `${backendBaseUrl}/oauth2/authorization/google`;
    });

    linkedinButton.addEventListener("click", () => {
        window.location.href =
            `${backendBaseUrl}/oauth2/authorization/linkedin`;
    });

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        errorMessage.style.display = "none";
        errorMessage.textContent = "";

        try {
            const response = await fetch(
                `${backendBaseUrl}/api/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({ email, password })
                }
            );

            const contentType =
                response.headers.get("content-type") || "";

            const result = contentType.includes("application/json")
                ? await response.json()
                : await response.text();

            if (!response.ok) {
                throw new Error(
                    typeof result === "string"
                        ? result || "Invalid email or password."
                        : result.message || "Login failed."
                );
            }

            // Do not treat an arbitrary successful response as proof
            // that authentication was established.
            if (
                typeof result === "object" &&
                result !== null &&
                result.authenticated === false
            ) {
                throw new Error(result.message || "Login failed.");
            }

            window.location.href = "/index.html";

        } catch (error) {
            console.error("Login error:", error);

            errorMessage.textContent =
                error.message || "Unable to connect to the server.";

            errorMessage.style.display = "block";
        }
    });
});
