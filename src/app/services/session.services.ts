import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class SessionService {
    private authKey:string = "jobs-web-auth";

    public isLogged(): boolean {
        let sessionData = localStorage.getItem(this.authKey)

        if (sessionData) {
            return true
        }   

        return false
    }

    public getUserAuth():IUser | IError {
        let sessionData = localStorage.getItem(this.authKey)

        if (sessionData) {
            let loggedUser:IUser = JSON.parse(sessionData)

            return loggedUser
        }

        return <IError>{
            error: "Not have user session"
        }
    }

    public storeSession(user: IUser): void {
        let sessionData = JSON.stringify(user)

        localStorage.setItem(this.authKey, sessionData)
    }

    public clearSession(): void {
        localStorage.setItem(this.authKey, "")
    }
}