import { Subject } from "../helpers/subject";
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

class Users extends Subject{

    constructor(){
        super()
        this.user = []
    }

    notify(user){
        this.user = user
        super.notify(this)
    }

    loginState(){
        if(this.user.length > 0){
            return
        } else {
            return this.notify()
        }
    }

    async register(username, email, password){
        return new Promise(async (resolve, reject) => {
            const newUser = {
                name: username,
                email: email,
                password: await this.encryptPassword(password),
                role: "user",
                id: uuidv4()
            }
            const verify = await this.verifyNewUser(newUser)
            if(verify.valueExists){
                reject(verify.matchingValues)
            } else {
                fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                })
                .then(res => {
                    if(res.ok){
                        resolve()
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            }
        })
    }

    verifyNewUser(newUser){
        return new Promise((resolve, reject) => {
            // Creo una copia de newUser para no borrar password y role del newUser original
            const propsToEmit = ["password", "role"]
            const newUserObject = { ...newUser } // Crear una copia independiente del objeto newUser
            propsToEmit.forEach(prop => delete newUserObject[prop]) // recorro el array con las key que quiero eliminar

            fetch("http://localhost:3000/users")
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

    verifyPassword(password, hash){
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, (error, result) => {
                if(error){
                    reject(error)
                } else {
                    if(result){
                        console.log('La contraseña es válida');
                        resolve()
                        return
                    } else {
                        reject('La contraseña es inválida')
                    }
                }
            })
        })
    }

    login(username, password){
        return new Promise( async (resolve, reject) => {
            try {
                const response = await fetch("http://localhost:3000/users")
                const users = await response.json();

                for(const user of users){
                    if(username === user.name){
                        const hashedPassword = user.password;
                        await this.verifyPassword(password, hashedPassword)
                        this.notify(user)
                        resolve()
                        return
                    }
                }
                reject("El usuario no existe")

            } catch (error) {
                reject(error)
            }
        })
    }

    logout(){
        return new Promise((resolve, reject) => {
            try {
                this.notify()
                resolve()
            } catch (error) {
                reject(error)
            }
        })
        
    }

}

export const user = new Users()