

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    userName = '';

    constructor() { }

    login(userName: string, password: string): void {
        // Auth for honest users
        this.userName = userName;
    }

    logout(): void {
        this.userName = '';
    }

}
