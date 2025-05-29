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
            window.location.href = 'registro.html';  // o login.html, según tu estructura
        });