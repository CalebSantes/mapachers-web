import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";// TODO: Add SDKs for Firebase products that you want to use
import { auth } from "../app/firebase.js";
import{showMessage} from "../app/showMessage.js";

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = signupForm.querySelector('.form-control[placeholder="Email"]').value;
    const password = signupForm.querySelector('.form-control[placeholder="******"]').value;
    const passwordError = document.getElementById('passwordError');

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials);
        // Registro exitoso, puedes redirigir al usuario a otra página o mostrar un mensaje de éxito.
    } catch (error) {
        if (error.code ==='auth/email-already-in-use'){
            alert= 'El correo ya se encuentra en uso'
        }
         else if (error.code === 'auth/invalid-email') {
            // Muestra un mensaje de error al usuario indicando que el correo electrónico no es válido
            alert = 'El correo electrónico proporcionado no es válido.'

        }
        // Captura el error y muestra un mensaje de error personalizado al usuario
        else if (error.code === 'auth/weak-password') {
            // Muestra un mensaje de error al usuario indicando que la contraseña es débil
            alert= 'La contraseña debe tener al menos 6 caracteres.'} 
        else  if(error.code){
            // Si el error no es relacionado con la contraseña o el correo electrónico, muestra un mensaje de error genérico
            alert = 'Se produjo un error durante el registro. Por favor, inténtalo de nuevo más tarde.'
        }
    }    
    //Exit when the user is correctly registered 
    const signupModal = document.querySelector('#signupModal')
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()

    showMessage("Welcome"+ userCredentials.user.email)
    
})

