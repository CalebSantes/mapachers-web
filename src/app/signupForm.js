import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { auth } from './firebase.js';

const signupForm = document.querySelector('.modal-contenido');
signupForm.addEventListener('submit', async (e) => { // Marcar la función como async
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const email = signupForm['.emailInput2'].value; // Obtener el valor del campo de email
    const password = signupForm['.passwordInput2'].value; // Obtener el valor del campo de contraseña

    console.log(email, password);

    // Sign up with email
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
    } catch (error) {
        console.log(error);
    }
});
