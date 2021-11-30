import { HttpClient, inject, IRouter, json, Router } from 'aurelia';

import { FetchUtils } from './../utils/fetch-utils';

@inject()
export class AccountsService {
    private isLoggedIn = false;
    private client: HttpClient;

    constructor(private fetchUtils: FetchUtils,@IRouter private router: IRouter) {
        this.client = this.fetchUtils.getClient();
    }

    async login(_user, _pwd) {
        
        const form = new FormData();
        
        form.set('username', _user);
        form.set('password', _pwd);

        return this.client.post('/login', form).then(() => {
            this.isLoggedIn = true;
            this.router.load('listar');
        });
    }

    async register(_account) {
        this.client.post('/accounts', json(_account));
    }

    async logout(){
        return this.client.get('/logout').then(() => {
            this.isLoggedIn = false;
            this.router.load('home');
        });
    }

}