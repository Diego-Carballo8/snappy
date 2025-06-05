const usuarios = [
  { nombre: "Juan Pérez" },
  { nombre: "María García" },
  { nombre: "Carlos Sánchez" },
  { nombre: "Ana Martínez" },
  { nombre: "Pedro López" },
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const resultadosFiltrados = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(query)
  );
  mostrarResultados(resultadosFiltrados);
});

function mostrarResultados(resultados) {
  resultsList.innerHTML = "";
  resultados.forEach(usuario => {
    const li = document.createElement("li");
    li.textContent = usuario.nombre;
    resultsList.appendChild(li);
  });
}
/*button regreso a inicio*/
document.getElementById('buttonSnappy').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'snappy.html';  // te dirige a inicio.html
});
/*button envia al perfil del usuario*/
document.getElementById('buttonPerfil').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'perfil.html';  // te dirige a inicio.html
});
