import { CriarplaylistPage } from "./criarplaylist-page";
import { ListarPage } from "./listar-page";
import { RegisterPage } from "./register-page";
import { LoginPage } from "./login-page";
import { inject, IRouter } from "aurelia";
import { AccountsService } from "./services/accounts-service";

@inject()
export class MyApp {
    static routes = [
        {
            path:['', 'home'],
            component:LoginPage, 
            title:'Inicio'
        },
        {
            path:'register',
            component:RegisterPage, 
            title:'Registar'
        },
        {
            path:'listar',
            component:ListarPage, 
            title:'Listar'
        },
        {
            path:'criar',
            component:CriarplaylistPage, 
            title:'Criar'
        }
    ]
    
    constructor(@IRouter private router:IRouter, private accountsService:AccountsService){
        
    }
}
