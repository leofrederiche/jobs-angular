import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { SessionService } from "src/app/services/session.services";
import { ApiService } from "src/app/services/api.services";
import { Router } from "@angular/router";

type authType = "login" | "register"

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.scss"]
})
export class AuthComponent {
    constructor(
        private sessionService: SessionService,
        private api: ApiService,
        private router: Router
    ) { }

    ngOnInit() {
        if (this.sessionService.isLogged()) {
            this.router.navigate(["jobs"])
        }
    }

    public authForm = new FormGroup({
        id: new FormControl<string>(''),
        name: new FormControl<string>(''),
        email: new FormControl<string>(''),
        password: new FormControl<string>('')
    })

    public type: authType = "login";
    public formError: IError | undefined;

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

    public switchType() {
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
        let currentUser: IUser = <IUser>this.authForm.value

        this.api.login(currentUser).subscribe({
            next: value => {
                let data = <IUser>value
                this.sessionService.storeSession(data)
                this.formError = undefined
                this.router.navigate(["jobs"])
            },
            error: err => {
                this.formError = { error: err.error.error }
            }
        })
    }

    private register() {
        let currentUser: IUser = <IUser>this.authForm.value

        this.api.register(currentUser).subscribe({
            next: value => {
                let data = <IUser>value
                this.sessionService.storeSession(data)
                this.formError = undefined
            },
            error: err => {
                this.formError = { error: err.error.error }
            }
        })
    }
}