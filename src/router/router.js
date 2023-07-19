import { user } from "../controllers/users-handle.js";
import { Error404 } from "../views/error.js";

import { Main } from "../views/main.js";

import { Login } from "../views/users/login.js";
import { Register } from "../views/users/register.js";

import { ProductsByCategory } from "../views/products/allbycategory.js";
import { ViewProduct } from "../views/products/viewproduct.js";
import { AddProduct } from "../views/products/addproduct.js";

import { Panel } from "../views/panel/panel.js";

let userAdmin = false;

function hashValidation(hash){
    const params = new URLSearchParams(hash.slice(2));
    const id = params.get("id");
    return id
}

const pages = {
    404: Error404,
    "": Main,
    "#/": Main,
    "#/login": Login,
    "#/register": Register,
    "#/addproduct": AddProduct,
    "#/starwars": ProductsByCategory,
    "#/consola": ProductsByCategory,
    "#/otros": ProductsByCategory
}

export async function Router(hash){
    const root = document.getElementById("root")
    root.innerHTML = ""

    const route = pages[hash] || pages[404]
    
    if(hashValidation(hash)){
        const id = hashValidation(hash)
        root.innerHTML = ViewProduct(id)
    } else if(hash === "#/starwars" || hash === "#/consola" || hash === "#/otros"){
        root.innerHTML = route(hash)
    } else{
        root.innerHTML = route()
    }    

    // switch (route) {
    //     case "#/":
    //     case "":
    //         // document.startViewTransition(() => Main())
    //         root.innerHTML = Main()
    //         break;
    //     case "#/login":
    //         // document.startViewTransition(() => Login())
    //         root.innerHTML = Login()
    //         break;
    //     case "#/register":
    //         // document.startViewTransition(() => Register())
    //         root.innerHTML = Register()
    //         break;
    //     case "#/starwars":
    //     case "#/consola":
    //     case "#/otros":
    //         document.startViewTransition(() => ProductsByCategory(route))
    //         break;
    //     case "#/panel":
    //         document.startViewTransition(() => Panel())
    //         break
    //     case "#/panel/addproduct":
    //         if(userAdmin){
    //             document.startViewTransition(() => AddProduct())
    //         } else {
    //             window.location.href = "#";
    //         }
    //         break    
    //     default:
    //         try {
    //             await document.startViewTransition(() => ViewProduct(route));
    //         } catch (error) {
    //             console.log("buu")
    //             document.startViewTransition(() => Error());
    //         }
            
    //         break;
    // }
}

class RouterObserver{
    async notify(subject){
        if(subject.user){
            const user = subject.user
            if(user.role === "admin"){
                userAdmin = true
            }
        } else {
            userAdmin = false
        }
    }
}

const routerObserver = new RouterObserver()
user.suscribe(routerObserver)