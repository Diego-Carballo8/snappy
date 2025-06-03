// Obtener datos del localStorage
const username = localStorage.getItem('username') || 'Usuario';
const email = localStorage.getItem('email') || 'No disponible';
const age = localStorage.getItem('age') || 'No especificada';
const bio = localStorage.getItem('bio') || 'Esta biografía está vacía.';

// Asignar datos al HTML
document.getElementById('username').textContent = username;
document.getElementById('email').textContent = email;
document.getElementById('age').textContent = age;
document.getElementById('bio').textContent = bio;

// Botón cerrar sesión - limpia localStorage y redirige a login
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'login.html';  // o login.html, según tu estructura
});

// Botón regresar - redirige a inicio.html
document.getElementById('logoutB').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'inicio.html';  // te dirige a inicio.html
});

// Funcionalidad para cambiar avatar
document.addEventListener('DOMContentLoaded', () => {
    const avatarInput = document.getElementById('avatarInput');
    const avatarImg = document.getElementById('avatar');

    avatarInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                avatarImg.src = e.target.result;

                // Opcional: guardar en localStorage (comentado por si no deseas guardar entre sesiones)
                // localStorage.setItem('userAvatar', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Opcional: cargar avatar desde localStorage si lo has guardado antes
    // const savedAvatar = localStorage.getItem('userAvatar');
    // if (savedAvatar) {
    //     avatarImg.src = savedAvatar;
    // }
});
