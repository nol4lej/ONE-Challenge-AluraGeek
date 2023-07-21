export class Subject{

    constructor(){
        this.observers = []
    }

    notify(data){
        this.observers.forEach(observer => {
            if(typeof observer === "function"){
                observer(data)
            } else {
                observer.notify(data)
            }
            
        });
    }

    subscribe(observer){
        this.observers.push(observer)
    }

    unsubscribe(subs){
        this.observers = this.observers.filter(observer => {
            observer !== subs
        })
    }
}