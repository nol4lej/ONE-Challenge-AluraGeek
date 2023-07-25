import { fetchGet } from "../helpers/fetch/fetch.get.js";
import { fetchPost } from "../helpers/fetch/fetch.post.js";
import { Subject } from "../helpers/subject.js";
import { state } from "../state/state.js";
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

class Users extends Subject{

    constructor(){
        super()
    }

    notify(user){
        super.notify(user)
    }

    async login(inputUser, password){
        return new Promise( async (resolve, reject) => {
            try {
                const users = await fetchGet("https://json-server-k3m3.onrender.com/users")
                let userFound = false;

                if(!users){
                    // este mensaje se manda al catch
                    throw ("Debido a un problema de conectividad, no es posible iniciar sesión.");
                }

                for(const user of users){
                    if(inputUser === user.name || inputUser === user.email){
                        const hashedPassword = user.password;
                        try {
                            await this.verifyPassword(password, hashedPassword)
    
                            const {email, id, name, role} = user
                            const userLogged = {
                                email: email, 
                                id: id, 
                                user: name, 
                                role: role
                            }
                            state.user = userLogged
                            this.notify(userLogged)
                            userFound = true
                            resolve("Haz iniciado sesión exitosamente.")
                            break
                        } catch (error) {
                            reject(error)
                            return
                        }
                    }
                }

                if(!userFound) {
                    // este mensaje se manda al catch
                    throw ("El usuario no existe");
                }

            } catch (error) {
                // el "error" se manda al componente y renderiza los mensajes de error.
                reject(error)
            }
        })
    }

    async verifyPassword(password, hash){
        try {
            const result = await bcrypt.compare(password, hash)
            if(result){
                return 'La contraseña es válida'
            } else {
                throw ('La contraseña es inválida')
            }
        } catch (error) {
            throw error
        }
    }

    async register(email, username, password){
        try {
            const newUser = {
                name: username,
                email: email,
                password: await this.encryptPassword(password),
                role: "user",
                id: uuidv4()
            }

            const res = await fetchPost("https://json-server-k3m3.onrender.com/users", newUser)
            return "Usuario creado exitosamente."

        } catch (error) {   
            throw "No se pudo crear un nuevo usuario."
        }
    }

    encryptPassword(password){
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(password, salt, (error, hash) => {
                    if(error){
                        reject(error)
                    } else {
                        resolve(hash)
                    }
                })
            }) 
        })

    }

    logout(){
        return new Promise((resolve, reject) => {
            try {
                state.user = ""
                this.notify()
                resolve()
            } catch (error) {
                reject(error)
            }
        })
        
    }

}

export const user = new Users()