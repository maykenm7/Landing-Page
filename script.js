document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Validar el formulario aquí
    var isValid = validateForm(name, email, password);
  
    if (isValid) {
      // Redireccionar a la página de inicio
      window.location.href = "home.html";
    }
  });
  
  function validateForm(name, email, password) {
    // Validar los campos aquí
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      displayErrorMessage("Todos los campos son obligatorios");
      return false;
    }
  
    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayErrorMessage("Ingrese un correo electrónico válido");
      return false;
    }
  
    return true;
  }
  
  function displayErrorMessage(message) {
    var errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
  
    var container = document.querySelector(".container");
    container.appendChild(errorDiv);
  } 