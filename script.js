const users = [
  {
    username: "user1",
    password: "password1",
    name: "Jeeva",
    email: "jeevaathecoder@gmail.com",
    age: 20,
  },
  {
    username: "user2",
    password: "password2",
    name: "Hari",
    email: "hari@gmail.com",
    age: 22,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");
  const loginButton = document.querySelector("button[type='submit']");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    const matchedUser = users.find(
      (user) =>
        user.username === enteredUsername && user.password === enteredPassword
    );

    if (matchedUser) {
      console.log("User details:", matchedUser);
      window.location.href = "Home.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
});
