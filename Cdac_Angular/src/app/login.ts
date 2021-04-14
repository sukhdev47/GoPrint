import { EmailValidator } from '@angular/forms';

export class Login 
{
    username:string;
    password:string;
    
    
    constructor(email:string,password:string) 
    { 
        this.username=email;
        this.password=password;
    
    }
}
