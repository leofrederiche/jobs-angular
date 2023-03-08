import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.services";

type authType = "login" | "register"

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.scss"]
})
export class AuthComponent {
    constructor(
        private authService: AuthService
    ){}

    public type:authType = "login"

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
}