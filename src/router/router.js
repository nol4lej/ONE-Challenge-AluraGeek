import { Main } from "../views/main.js";
import { Error } from "../views/error.js";
import { Login } from "../views/users/login.js";
import { ProductsByCategory } from "../views/products/allbycategory.js";
import { ViewProduct } from "../views/products/viewproduct.js";
import { AddProduct } from "../views/products/addproduct.js";
import { Register } from "../views/users/register.js";
import { Panel } from "../views/panel/panel.js";
import { userStateManage } from "../controllers/users-manage.js";

let userState = false;

export async function Router(route){
    const root = document.getElementById("root")
    root.innerHTML = ""
    switch (route) {
        case "#/":
        case "":
            document.startViewTransition(() => Main())
            break;
        case "#/login":
            document.startViewTransition(() => Login())
            break;
        case "#/register":
            document.startViewTransition(() => Register())
            break;
        case "#/starwars":
        case "#/consola":
        case "#/otros":
            document.startViewTransition(() => ProductsByCategory(route))
            break;
        case "#/panel":
            document.startViewTransition(() => Panel())
            break
        case "#/panel/addproduct":
            if(userState){
                document.startViewTransition(() => AddProduct())
            } else {
                window.location.href = "#";
            }
            break    
        default:
            await document.startViewTransition(() => ViewProduct(route));
            break;
    }
}

class RouterObserver{

 notify(subject){
    if(subject.users){
        userState = true
    }
    

 }

}

const routerObserver = new RouterObserver()
userStateManage.suscribe(routerObserver)