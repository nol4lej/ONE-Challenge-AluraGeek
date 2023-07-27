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
                const users = await fetchGet("https://json-server-vercel-bh3xdo885-nol4lej.vercel.app/users")
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

            const verify = await this.verifyNewUser(newUser)
            if(verify.valueExists){
                throw "El usuario o email ingresado ya existe."
            }
            const res = await fetchPost("https://json-server-vercel-bh3xdo885-nol4lej.vercel.app/users", newUser)
            return "Usuario creado exitosamente."

        } catch (error) {   
            throw error
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

    verifyNewUser(newUser){
        return new Promise((resolve, reject) => {
            // Creo una copia de newUser para no borrar password y role del newUser original
            const propsToEmit = ["password", "role"]
            const newUserObject = { ...newUser } // Crear una copia independiente del objeto newUser
            propsToEmit.forEach(prop => delete newUserObject[prop]) // recorro el array con las key que quiero eliminar

            fetch("https://json-server-vercel-bh3xdo885-nol4lej.vercel.app/users")
            .then(res => res.json())
            .then(users => {

                const arrayValuesNewUser = Object.values(newUserObject) // devuelve una array de valores de un objeto dado

                let valueExists = false;
                let matchingValues = []; // almacena todas las coincidencias
                users.forEach(element => {
                    const arrayValueElement = Object.values(element)
                    // se está utilizando la función some() junto con includes() para verificar si al menos un valor de arrayValuesNewUser (los valores del objeto newUser) está presente en arrayValueElement (los valores del objeto element, que es cada user de la db).
                    // some() itera sobre los elementos del array arrayValuesNewUser y devuelve true si al menos uno de los elementos cumple con la condición especificada en la función de callback. De lo contrario, devuelve false.
                    arrayValuesNewUser.forEach(value => {
                        if(arrayValueElement.includes(value)){
                            matchingValues.push(value)
                            valueExists = true;
                        }
                    })
                });
                resolve({ valueExists, matchingValues });
            })
            .catch(error => reject(error))
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