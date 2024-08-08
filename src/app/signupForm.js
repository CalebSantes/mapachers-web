import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "../app/firebase.js";
import { showMessage } from "../app/showMessage.js";

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm.querySelector('.form-control[placeholder="Email"]').value;
    const password = signupForm.querySelector('.form-control[placeholder="******"]').value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);

        // Exit when the user is correctly registered
        const signupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        showMessage("Welcome " + userCredentials.user.email ,"success");
    } catch (error) {
        let alert;
        if (error.code === 'auth/email-already-in-use') {
            alert = 'El correo ya se encuentra en uso';
        } else if (error.code === 'auth/invalid-email') {
            alert = 'El correo electrónico proporcionado no es válido.';
        } else if (error.code === 'auth/weak-password') {
            alert = 'La contraseña debe tener al menos 6 caracteres.';
        } else {
            alert = 'Se produjo un error durante el registro. Por favor, inténtalo de nuevo más tarde.';
        }
        console.error(error);
        showMessage(alert, "error");
    }
});
