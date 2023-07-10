import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"
import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { auth, db } from "./firebase.js"
import { Subject } from "../helpers/subject.js"

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
        try {
            onAuthStateChanged(auth, async (user) => {
                console.log("USER DESDE onAuthStateChanged:", user)
                this.notify(user) // se notifica aun que sea null, para controlar los estado de la sesion.
            })
        } catch (error) {
            console.log(error)
        }

    }

    async registerUser(email, password, username){
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                await this.UpdateUsername(userCredential, username)
                await this.AddingUserToFirestore(userCredential)
            })
            
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

    async AddingUserToFirestore(userCredential){
        const user = userCredential.user
        const { email, displayName , uid} = user
        try {
            await addDoc(collection(db, "users"), {
                email: email,
                displayName: displayName,
                uid: uid,
                role: "user"
            })
        } catch (error) {
            console.log(error)
        }
    }

    async UpdateUsername(userCredential, username){
        const user = userCredential.user;
        try {
            return updateProfile(user, {
                displayName: username
            })
        } catch (error) {
            console.log(error)
        }
    }

    async



    async GetUsersRole(currentUser){
        const querySnapshot = await getDocs(collection(db, "users"));
        let userRole;
        querySnapshot.forEach((doc) => {
            const { displayName, email, role, uid } = doc._document.data.value.mapValue.fields
            if (uid.stringValue === currentUser.uid){
                userRole = role.stringValue;
            }
        });
        return userRole;
    }

}

export const userStateManage = new UserStateManage();

userStateManage.AuthState()