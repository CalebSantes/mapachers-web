import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";// TODO: Add SDKs for Firebase products that you want to use
import { auth } from "../app/firebase.js";

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = signupForm.querySelector('.form-control[placeholder="Email"]').value;
    const password = signupForm.querySelector('.form-control[placeholder="******"]').value;
    const passwordError = document.getElementById('passwordError');

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
        // Registro exitoso, puedes redirigir al usuario a otra página o mostrar un mensaje de éxito.
    } catch (error) {
        // Captura el error y muestra un mensaje de error personalizado al usuario
        if (error.code === 'auth/weak-password') {
            // Muestra un mensaje de error al usuario indicando que la contraseña es débil
            passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        } else if (error.code === 'auth/invalid-email') {
            // Muestra un mensaje de error al usuario indicando que el correo electrónico no es válido
            passwordError.textContent = 'El correo electrónico proporcionado no es válido.';
        } else {
            // Si el error no es relacionado con la contraseña o el correo electrónico, muestra un mensaje de error genérico
            passwordError.textContent = 'Se produjo un error durante el registro. Por favor, inténtalo de nuevo más tarde.';
        }
        console.error(error);
    }
    //Exit when the user is correctly registered 
    const signupModal = document.querySelector('#signupModal')
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()
})

