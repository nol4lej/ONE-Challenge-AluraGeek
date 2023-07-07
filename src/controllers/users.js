class userManager {
    constructor(){
        this.users = []
    }

    addUser(user){
        this.users.push(user)
    }

    removeUser(userId){
        this.users = this.users.filter(user => user.id !== userId)
    }

    getUser(userId){
        return this.users.filter(user => user.id === userId)
    }

    changeInfo(userId, infoKey, newValue){
        const user = this.getUser(userId)
        if(user){
            if(user.hasOwnProperty(infoKey)){ // Verificar si el atributo existe en el usuario
                if(user[infoKey] !== newValue){ // Verificar si el valor es diferente
                    user[infoKey] = newValue // // Cambiar el valor del atributo
                    console.log("El valor del atributo se ha cambiado exitosamente.");
                } else {
                    console.log("El valor del atributo es el mismo.");
                }
            } else {
                console.log("El atributo ingresado no existe en el usuario.");
            }
        } else {
            console.log("El usuario no existe.");
        }
    }
}

class User {
    constructor(name, email, password, role){
        this.id,
        this.name,
        this.email,
        this.password,
        this.role
    }
}