import { fetchGet } from "../helpers/fetch/fetch.get.js";
import { Subject } from "../helpers/subject.js";
import { state } from "../state/state.js";
const bcrypt = require('bcryptjs');

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
                const users = await fetchGet("http://localhost:3000/users")
        
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
                                role, role
                            }
        
                            this.notify(userLogged)
                            resolve(state.user = userLogged)
                        } catch (error) {
                            reject(error)
                        }
                    } else {
                        throw new Error("El usuario no existe")
                    }
                }
            } catch (error) {
                reject(error)
            }
        })


    }

    verifyPassword(password, hash){
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, (error, result) => {
                if(error){
                    reject(error)
                } else {
                    if(result){
                        console.log('La contraseña es válida');
                        resolve()
                    } else {
                        reject('La contraseña es inválida')
                    }
                }
            })
        })
    }


}

export const user = new Users()