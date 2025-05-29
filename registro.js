document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener valores del formulario
  const nombre = document.getElementById("nombre").value;
  const usuario = document.getElementById("usuario").value;
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;
  const anecdota = document.getElementById("anecdota").value;

  // Guardar en localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("usuario", usuario);
  localStorage.setItem("correo", correo);
  localStorage.setItem("contrasena", contrasena);
  localStorage.setItem("anecdota", anecdota);

  // Redirigir al inicio o perfil
  window.location.href = "snappy.html"; // Cambia a tu página principal real
});
