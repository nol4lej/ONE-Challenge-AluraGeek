import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { Subject } from "./subject.js"

class UserStateManage extends Subject{
    constructor(){
        super();
        this.users
    }

    notify(user){
        this.users = user
        super.notify(this);
    }

    AuthState(){
        onAuthStateChanged(auth, async (user) => {
            console.log("USER DESDE onAuthStateChanged:", user)
            this.notify(user) // se notifica aun que sea null, para controlar los botones de sesion
        })
    }

    async registerUser(email, password){
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            this.Logout() // se cierra sesion porque al registrar un nuevo usuario, este queda logeado despues de registrar
        } catch (error) {
            switch (error.code) {
                case "auth/weak-password":
                    console.log("Password should be at least 6 characters")
                    break;
                case "auth/email-already-in-use":
                    console.log("Email already in use")
                    break;
                default:
                    console.log(error.code)
                    break;
            }
        }
    }

    async Login(email, password){
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                    console.log("auth/user-not-found")
                    break;
                default:
                    console.log(error.code)
                    break;
            }
        }
    }

    async Logout(){
        await signOut(auth)
    }

}

export const userStateManage = new UserStateManage();

userStateManage.AuthState()