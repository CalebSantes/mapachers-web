const signupForm = document.querySelector('.modal-contenido')
signupForm.addEventListener('submit',(e) =>{
 const email=signupForm['signup-email']
 const password=signupForm['signup-password']
 console.log(email,password)
})