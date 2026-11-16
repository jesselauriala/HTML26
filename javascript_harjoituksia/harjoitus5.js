const lomake = document.querySelector(".lomake");

lomake.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(lomake);

    console.log([...formData.entries()]);
});

const password = document.getElementById("salasana");
const confirmPassword = document.getElementById("salasana-vahvistus");

  function validatePasswords() {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Salasanat eivät täsmää");
    } else {
      confirmPassword.setCustomValidity("");
    }
  }

  password.addEventListener("input", validatePasswords);
  confirmPassword.addEventListener("input", validatePasswords);