import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "src/app/services/auth.services";
import { ApiService } from "src/app/services/api.services";

type authType = "login" | "register"

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.scss"]
})
export class AuthComponent {
    constructor(
        private authService: AuthService,
        private api: ApiService
    ){}

    public authForm = new FormGroup({
        id: new FormControl<string>(''),
        name: new FormControl<string>(''),
        email: new FormControl<string>(''),
        password: new FormControl<string>('')
    })

    public type:authType = "login";
    public formError:IError | undefined;

    public labels = {
        "login": {
            title: "Login",
            linkTo: "Register",
            button: "Sign-in"
        },

        "register": {
            title: "Register",
            linkTo: "Login",
            button: "Register"
        }
    }

    public switchType () {
        if (this.type == "login") {
            this.type = "register"
        } else {
            this.type = "login"
        }
    }

    public submitForm() {
        if (this.type == "login") {
            this.signin()
        } else {
            this.register()
        }

        console.log(this.formError)
    }

    private signin() {
        let currentUser:IUser = <IUser>this.authForm.value
        
        this.api.login(currentUser).subscribe({
            next: value => {
                let data = <IUser>value
                this.formError = undefined
            },
            error: err => {
                this.formError = { error: err.error.error }
            }
        })
    }

    private register() {
        let currentUser:IUser = <IUser>this.authForm.value

        this.api.register(currentUser).subscribe({
            next: value => {
                let data = <IUser>value
                this.formError = undefined
            },
            error: err => {
                this.formError = { error: err.error.error }
            }
        })
    }
}