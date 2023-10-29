const users = [
    {
        "name": "Admin",
        "username": "admin",
        "password": "admin@123"
    },
    {
        "name": "Alex Joy",
        "username": "alex",
        "password": "alex@123"
    },
    {
        "name": "Johnson Antony",
        "username": "johnson",
        "password": "john123!"
    },
    {
        "name": "Chris Jacob",
        "username": "chris",
        "password": "chris1234"
    },
    {
        "name": "Eliza Fernandez",
        "username": "eliza",
        "password": "eliza_123"
    },
    {
        "name": "Mary S",
        "username": "mary",
        "password": "mary@1234"
    }
]

const loginForm = document.getElementById("form");

loginForm.addEventListener("submit", (e)=>{e.preventDefault();

    // Get the input values
    const username = document.getElementById("uname").value;
    const password = document.getElementById("pwd").value;

    // Check if the entered credentials are valid
    const isValid = users.some(user => user.username === username && user.password === password);

    if (isValid) {
        alert("Login Successful! Redirecting to the Service page.");
        window.location.href = "../html/services.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
