import { inject, json } from "aurelia";
import { IAccount } from "./entities/account";
import { AccountsService } from "./services/accounts-service";

@inject()
export class RegisterPage {

    constructor(private accountsService: AccountsService) {

    }

    private account: IAccount = { username: null, password: null, fullname: null }
    private password2: string

    guardar() {
        this.accountsService.register(this.account).then((_contaCriada) => {
            console.log("Validado", _contaCriada);
        })

    }

    compararPassword(){

        if (this.account.password == this.password2){
            this.guardar()
            alert("Registo feito com sucesso!") 
            console.log("Certo")
        }
        else{
        alert("Paswwords não coincidem")
        console.log("Errado")
        }
    }
    

}
 