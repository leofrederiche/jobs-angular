import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.services";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent {
    constructor(
        private authService: AuthService
    ){}

    public isLogged: boolean = this.authService.isLogged()
}