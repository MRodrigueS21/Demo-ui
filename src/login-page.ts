import { inject, json } from "aurelia";
import { IAccount } from "./entities/account";
import { AccountsService } from "./services/accounts-service";

@inject()
export class LoginPage {
  
  constructor( private accountsService:AccountsService){

  }

  private account: IAccount = {
    username: null, password: null,
    fullname: ""
  }

  login(event:SubmitEvent) {
    event.preventDefault()
    this.accountsService.login(this.account.username, this.account.password).then((_loginEfetuado) => {
        console.log("Validado", _loginEfetuado);
    })

}

}
