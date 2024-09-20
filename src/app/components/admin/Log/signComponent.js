import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../../../../firebaseConfig';


export const creatAccount = async (mail, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, mail, password);
      const user = userCredential.user;
      console.log("Cuenta creada:", user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log("El usuario ya tiene una cuenta, iniciando sesión...");
        await logIn(mail, password);
      } else {
        console.error("Error al crear la cuenta:", error.message);
      }
    }
  };

export const googleSignIn = async()=>{
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
}

export const logIn = async(mail,password)=>{
  await signInWithEmailAndPassword(auth, mail, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    if (error.code === 'auth/invalid-credential') {
      console.log('Error: Contraseña incorrecta');
    } else if (error.code === 'auth/invalid-email') {
      console.log('Error: Usuario no encontrado');
    } else {
      console.log('Se produjo un error distinto al esperado');
    }
  });
}

export const logOut = async()=>{
    try{
        auth?.currentUser?.email?
        await signOut(auth):
        console.log('loged out')
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}


const authFunctions = { creatAccount, logIn, logOut, googleSignIn };

export default authFunctions;