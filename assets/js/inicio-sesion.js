
//Elementos del DOM
// Referencias a los elementos del DOM
const loginBtn = document.getElementById('login-btn'); // Si hay un botón externo de iniciar sesión
const registerBtn = document.getElementById('register-btn'); // Si hay un botón externo de registro
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const closeLogin = document.getElementById('close-login');
const closeRegister = document.getElementById('close-register');
const openRegister = document.getElementById('open-register');
const openLogin = document.getElementById('open-login');

// Función para abrir un modal y cerrar el otro si está abierto
function openModal(open, close) {
  open.classList.add('show');
  close.classList.remove('show');
}

// Abrir modal de inicio de sesión
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    openModal(loginModal, registerModal);
  });
}

// Abrir modal de registro
if (registerBtn) {
  registerBtn.addEventListener('click', () => {
    openModal(registerModal, loginModal);
  });
}

// Cambiar de inicio de sesión a registro
openRegister.addEventListener('click', (e) => {
  e.preventDefault();
  openModal(registerModal, loginModal);
});

// Cambiar de registro a inicio de sesión
openLogin.addEventListener('click', (e) => {
  e.preventDefault();
  openModal(loginModal, registerModal);
});

// Cerrar los modales al hacer clic en la "X"
closeLogin.addEventListener('click', () => loginModal.classList.remove('show'));
closeRegister.addEventListener('click', () => registerModal.classList.remove('show'));

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
  if (event.target === loginModal) loginModal.classList.remove('show');
  if (event.target === registerModal) registerModal.classList.remove('show');
});