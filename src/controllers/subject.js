export class Subject{
    constructor(){
        this.observers = []
    }

    notify(obj){
        this.observers.forEach(observer => {
            observer.notify(obj)
        })
    }

    suscribe(observer){
        this.observers.push(observer)
    }

    unsuscribe(observer){
        this.observers = this.observers.filter(e => e != observer)
    }

}